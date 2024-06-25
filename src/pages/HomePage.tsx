import { FC, useEffect, useState } from "react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { IconButton } from "@mui/material";

import { CodeSyncLayout } from "../layout/CodeSyncLayout";
import { Footer } from "./components/Footer";
import { Pricing } from "./components/Pricing";
import { AboutUs } from "./components/AboutUs";
import { Products } from "./components/Products";

export const HomePage: FC = () => {

  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;

      // Show the arrow if the user is not at the bottom of the page
      setShowArrow(scrollTop + windowHeight < documentHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleArrowClick = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <CodeSyncLayout>
      <div style={{ width: '100%', overflowX: 'hidden' }}>
        <AboutUs />
        <Products />
        <Pricing />
        <Footer />

        {showArrow && (
          <IconButton
            onClick={handleArrowClick} 
            sx={{ 
              position: 'fixed', 
              bottom: 16, 
              left: '50%', 
              transform: 'translateX(-50%)', 
              backgroundColor: 'primary.main', 
              color: 'white', 
              '&:hover': {
                backgroundColor: 'primary.dark',
              }
            }}
          >
            <ArrowDownwardIcon />
          </IconButton>
        )}

      </div>
    </CodeSyncLayout>
  );
}
