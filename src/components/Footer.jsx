import { Instagram } from "@mui/icons-material";
import { Facebook } from "@mui/icons-material";
import { WhatsApp } from "@mui/icons-material";
import { Google } from "@mui/icons-material";
import { Map } from '@mui/icons-material';
import { Badge, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <div className="container my-5">
            <footer class="text-center text-dark">
                <p>
                    FOLLOW US
                </p>
                <div class="container">
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
                        <IconButton >
                            <Badge>
                                <Link to={"/LocationPage"}><Map style={{color: "gray"}}/></Link>
                            </Badge>
                        </IconButton>
                    </section>
                </div>
                <p>@2023 Copyright: Armando, Darnell, Martin y Misael</p>
            </footer>
        </div>
    );
}