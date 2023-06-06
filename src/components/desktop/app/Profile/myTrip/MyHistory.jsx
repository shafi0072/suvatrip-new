import React, { useState, useEffect, useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Grid } from "@mui/material";
import { UserContent } from "@/src/store/AuthContent";
import { baseUrl } from "@/src/config/serverConfig";

export default function ActionAreaCard() {
  const [users, setUsers] = useState([]);
  const { userInfo } = useContext(UserContent);
  const email = userInfo?.email;
  console.log(userInfo?.email);
  useEffect(() => {
    fetch(`${baseUrl}/hotel/bookingForUser/${userInfo?.email}`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  console.log(users);
  return (
    <>
      <Grid container spacing={2} alignItems="center">
        {users.map((user) => (
          <Grid sx={6} item>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={user.img}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {user.userName}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    {user.hotelName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
