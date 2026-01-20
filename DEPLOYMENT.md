# Deployment Guide for Doctor Azmy Website

## Prerequisites

- Docker and Docker Compose installed on your VPS
- A domain name pointing to your VPS IP address
- Nginx installed on your VPS (for reverse proxy)

## Architecture

This setup uses:
- **Next.js Standalone Server** running in Docker (port 3000 internally)
- **Docker Container** exposing port 3001 on the host
- **Nginx** on VPS as reverse proxy (only nginx config file needed)

## Deployment Steps

### 1. Build and Run Locally (Optional Testing)

```bash
# Build the Docker image
docker-compose build

# Start the container
docker-compose up -d

# Check if it's running
docker-compose ps

# View logs
docker-compose logs -f
```

Access the site at `http://localhost:3001`

### 2. Deploy to VPS

#### Step 2.1: Transfer Files to VPS

```bash
# From your local machine, copy files to VPS
scp -r . user@your-vps-ip:/home/user/doctor-azmy

# Or use git
ssh user@your-vps-ip
cd /home/user
git clone your-repository-url doctor-azmy
cd doctor-azmy
```

#### Step 2.2: Build and Run on VPS

```bash
# SSH into your VPS
ssh user@your-vps-ip

# Navigate to project directory
cd /home/user/doctor-azmy

# Build and start the container
docker-compose up -d --build

# Verify it's running
docker-compose ps
docker-compose logs
```

#### Step 2.3: Configure Nginx Reverse Proxy

```bash
# Copy the nginx configuration
sudo cp nginx-vps.conf.example /etc/nginx/sites-available/doctor-azmy

# Edit the configuration file
sudo nano /etc/nginx/sites-available/doctor-azmy

# Replace 'yourdomain.com' with your actual domain name
# Make sure the proxy_pass port matches docker-compose.yml (3001)

# Create symbolic link
sudo ln -s /etc/nginx/sites-available/doctor-azmy /etc/nginx/sites-enabled/

# Test nginx configuration
sudo nginx -t

# Reload nginx
sudo systemctl reload nginx
```

#### Step 2.4: Set Up SSL with Let's Encrypt (Recommended)

```bash
# Install certbot if not already installed
sudo apt update
sudo apt install certbot python3-certbot-nginx

# Obtain SSL certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Certbot will automatically configure HTTPS in your nginx config
# Follow the prompts to complete setup

# Test auto-renewal
sudo certbot renew --dry-run
```

### 3. Verify Deployment

Visit your domain in a browser:
- HTTP: `http://yourdomain.com`
- HTTPS: `https://yourdomain.com` (after SSL setup)

### 4. Useful Commands

```bash
# View logs
docker-compose logs -f doctor-azmy

# Restart container
docker-compose restart

# Stop container
docker-compose stop

# Start container
docker-compose start

# Rebuild and restart
docker-compose up -d --build

# Remove container
docker-compose down

# Remove container and volumes
docker-compose down -v
```

### 5. Updating the Application

```bash
# Pull latest changes
git pull origin main

# Rebuild and restart
docker-compose up -d --build

# Check logs for any errors
docker-compose logs -f
```

### 6. Troubleshooting

#### Container won't start
```bash
# Check logs
docker-compose logs doctor-azmy

# Check if port 3001 is already in use
sudo netstat -tulpn | grep 3001

# If port is in use, change it in docker-compose.yml
```

#### Can't access website
```bash
# Check if container is running
docker-compose ps

# Check nginx status
sudo systemctl status nginx

# Check nginx error logs
sudo tail -f /var/log/nginx/doctor-azmy-error.log

# Check if firewall is blocking ports
sudo ufw status
sudo ufw allow 80
sudo ufw allow 443
```

#### SSL issues
```bash
# Check certificate status
sudo certbot certificates

# Renew certificate manually
sudo certbot renew

# Check nginx SSL configuration
sudo nginx -t
```

## Port Configuration

- **Container Internal Port**: 3000 (Next.js standalone server)
- **Host Port**: 3001 (exposed to VPS)
- **Public Ports**: 80 (HTTP) and 443 (HTTPS) via nginx reverse proxy

Make sure your VPS firewall allows traffic on ports 80 and 443.

## Notes

- The application runs as a Next.js standalone server (SSR capable)
- Only one nginx configuration file on your VPS (no nginx in container)
- The VPS nginx acts as a reverse proxy to the Docker container
- Nginx on VPS handles SSL, caching, and static file optimization
- Logs are stored in `/var/log/nginx/` on your VPS
- Container logs can be viewed with `docker-compose logs`
