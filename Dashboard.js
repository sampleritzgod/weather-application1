import React from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  Paper
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import SearchIcon from '@mui/icons-material/Search';
import HistoryIcon from '@mui/icons-material/History';
import PersonIcon from '@mui/icons-material/Person';

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const features = [
    {
      title: 'Search Weather',
      description: 'Get current weather information for any city around the world',
      icon: <SearchIcon sx={{ fontSize: 40 }} />,
      action: () => navigate('/search'),
      color: '#1976d2'
    },
    {
      title: 'Weather History',
      description: 'View your recent weather searches and track patterns',
      icon: <HistoryIcon sx={{ fontSize: 40 }} />,
      action: () => navigate('/history'),
      color: '#388e3c'
    },
    {
      title: 'Profile',
      description: 'Manage your account settings and preferences',
      icon: <PersonIcon sx={{ fontSize: 40 }} />,
      action: () => navigate('/profile'),
      color: '#f57c00'
    }
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Paper elevation={2} sx={{ p: 4, mb: 4, textAlign: 'center' }}>
          <WbSunnyIcon sx={{ fontSize: 60, color: '#f57c00', mb: 2 }} />
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to Weather App
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Hello, {user?.username}! Ready to check the weather?
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Get real-time weather information, forecasts, and track your search history
          </Typography>
        </Paper>

        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Box sx={{ color: feature.color, mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography gutterBottom variant="h5" component="h2">
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                  <Button 
                    size="large" 
                    onClick={feature.action}
                    variant="contained"
                    sx={{ backgroundColor: feature.color }}
                  >
                    Get Started
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Paper elevation={1} sx={{ p: 3, mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Quick Tips
          </Typography>
          <Typography variant="body2" color="text.secondary">
            • Search for any city name to get current weather conditions<br/>
            • View detailed forecasts for the next 5 days<br/>
            • Your search history is automatically saved<br/>
            • All weather data is provided by OpenWeatherMap API
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default Dashboard; 