import { Instagram } from "@mui/icons-material";

import { Facebook } from "@mui/icons-material";

import { WhatsApp } from "@mui/icons-material";

import { Google } from "@mui/icons-material";

import { Map } from "@mui/icons-material";

import { Badge, IconButton } from "@mui/material";

export const Footer = () => {
  return (
    <div className="container my-5">
      <footer className="text-center text-dark">
        <p>FOLLOW US</p>

        <div className="container">
          <section>
            <IconButton>
              <Badge>
                <Facebook />
              </Badge>
            </IconButton>

            <IconButton>
              <Badge>
                <Instagram />
              </Badge>
            </IconButton>

            <IconButton>
              <Badge>
                <WhatsApp />
              </Badge>
            </IconButton>

            <IconButton>
              <Badge>
                <Google />
              </Badge>
            </IconButton>
          </section>
        </div>

        <p>@2023 Copyright: Armando, Darnell, Martin y Misael</p>
      </footer>
    </div>
  );
};
