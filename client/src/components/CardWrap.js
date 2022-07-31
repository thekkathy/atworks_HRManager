import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const CardWrap = ({ children, sxOptions = {}, title = "" }) => {
  return (
    <Card sx={sxOptions}>
      <CardContent>
        {title && <div className="row m-2">
          <Typography variant="h6" component="h1">
            {title}
          </Typography>
        </div>}
        <div className="m-4 p-1">{children}</div>
      </CardContent>
    </Card>
  );
};

export default CardWrap;
