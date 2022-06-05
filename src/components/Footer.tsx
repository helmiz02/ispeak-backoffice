import React from 'react'
import { Box, Container, Link, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export default function Footer() {
    return (
        <div>
            <section className="footer text-white bg-primary">
                <Container maxWidth="lg">
                    <Box
                        py={3}
                        display={{ xs: 'block', md: 'flex' }}
                        alignItems="center"
                        textAlign={{ xs: 'center', md: 'left' }}
                        justifyContent="space-between"
                    >
                        <Box>
                            <Typography variant="subtitle1">
                                &copy; 2022 - ISpeak Dashboard
                            </Typography>
                        </Box>
                        <Typography sx={{ pt: { xs: 2, md: 0 } }} variant="subtitle1">
                            Crafted by <Link href="https://www.linkedin.com/in/abir-lakhal-67b016174/" target="_blank" rel="noopener noreferrer">Abir.Lakhal</Link>
                        </Typography>
                    </Box>
                </Container>
            </section>
        </div>
    )
}
