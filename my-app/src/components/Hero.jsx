import React from 'react'
import hero from "../../src/assets/hero.jpg";
import {motion} from "framer-motion";
import { Link } from "react-router-dom";

const bgStyle = {
    backgroundImage: `url(${hero})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    width:'100%',
}
const FadeUp =(delay)=>{
    return{
         initial :{
            opacity:0,
            y:30,
         },
         animate:{
            opacity:1,
            y:0,
            transition:{
                duration:0.5,
                delay:delay,
                ease:"easeInOut",
            },
         },
    };
};

const Hero = () => {
    const [data, setData]= React.useState({
        name:"",
        email:"",
        amount:0,
 } );

const handleclick = (e)=>{
    const name = e.target.name;
    setData((previousData) =>{
        return{
            ...previousData,
            [name]: e.target.value,
        };
    });
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
};

  return (
    <div style={bgStyle}>
        <div className='min-h-[650px] md:min-h-[750px] 
        bg-gradient-to-r from-black/80 to-primary/60 
        pt-20 pb-10 md:pt-48'>
            <div className='container'>
               <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12 text-white py-10px'>
                  {/* hero text section */}
                  <div className='flex flex-col items-center text-center gap-5 lg:items-start lg:text-left lg:max-w-[450px] '>
                    <motion.h1 
                     variants={FadeUp(0.2)}
                     initial="initial"
                     whileInView="animate"
                    className='text-5xl lg:text-6xl font-bold py-10px'> Join Us in Protecting Nature and Animal Life</motion.h1>
                    <motion.p
                    variants={FadeUp(0.4)}
                    initial="initial"
                    animate="animate"
                    >Together, we restore habitats, protect endangered species, and support animal welfare-every donation brings us closer to a healthier planet.  
                    </motion.p>
                    <div className='space-x-4'>  
                    <Link to="/started">
                    <motion.button 
                    variants={FadeUp(0.6)}
                    initial="initial"
                    animate="animate"
                    className='btn-primary'> Get Started 
                    </motion.button> 
                   </Link>
                   <Link to="/login">
                                    <motion.button
                                        variants={FadeUp(0.8)}
                                        initial="initial"
                                        animate="animate"
                                        className='btn-outline'>
                                        Login
                                    </motion.button>
                                </Link>
                    </div> 
                  </div>
                  {/* Form Section */}
                  <motion.div 
                  variants={FadeUp(0.2)}
                  initial={{opacity:0, x:100}}
                  animate={{ opacity: 1, x: 0}} 
                  transition={{type:"spring", stiffness:100}}
                  className='w-[90%] md:w-[400px] mx-auto p-4 bg-white dark:bg-black text-black dark:text-white rounded-2xl shadow-md'>
                     <div>
                        <h1 className='text-lg text-center font-semibold'> Quick Donation Form
                        </h1>
                        <div className='flex items-center justify justify-center gap-8 py-4'>
                            <button onClick={() => setData({...data, amount:1})} 
                            className="button-square"> $01 </button>
                            <button onClick={() => setData({...data, amount:5})} 
                            className="button-square"> $05 </button>
                            <button onClick={() => setData({...data, amount:10})} 
                            className="button-square"> $10 </button>
                            <button onClick={() => setData({...data, amount:99})} 
                            className="button-square"> $99 </button>
                        </div>
                        {/* input section here */}
                     </div>
                     <div className='space-y-6'>
                     <input type='number' 
                        name="amount"
                        id="amount"
                        onChange={handleclick}
                        placeholder='Amount'
                        defaultValue={1}
                        value={data.amount}
                        min={1}
                        max={100}
                        className='w-full border dark:border-gray-800 px-4 py-2 rounded-lg dark:bg-black'
                     />
                     <input 
                        type="text"
                        name="name"
                        //id="name"
                        onChange={handleclick}
                        placeholder="Name"
                        className='w-full border dark:border-gray-800 px-4 py-2 rounded-lg dark:bg-black'
                     />
                     <input 
                        type="email"
                        name="email"
                        id="email"
                        onChange={handleclick}
                        placeholder="Email"
                        className='w-full border dark:border-gray-800 px-4 py-2 rounded-lg dark:bg-black'
                     />
                     <button 
                     className='btn-primary w-full rounded-full'
                     onClick={handleSubmit}         
                     >
                        Donate Now
                     </button>
                     </div>
                  </motion.div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Hero

/*import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Container,
  Grid,
  Typography,
  Box,
  Paper,
  TextField,
  Button,
  useTheme,
  useMediaQuery
} from '@mui/material';
import hero from "../../src/assets/hero.jpg";

const bgStyle = {
  backgroundImage: `url(${hero})`,
  backgroundSize: "cover",
  backgroundPosition: "top",
  backgroundRepeat: "no-repeat",
  width: '100%',
};

const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  
  const [data, setData] = React.useState({
    name: "",
    email: "",
    amount: 0,
  });

  const handleClick = (e) => {
    const name = e.target.name;
    setData((previousData) => {
      return {
        ...previousData,
        [name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  const handleAmountButtonClick = (amount) => {
    setData({ ...data, amount });
  };

  return (
    <Box style={bgStyle}>
      <Box
        sx={{
          minHeight: { xs: '650px', md: '750px' },
                           
          background: 'linear-gradient(to right, rgba(0, 0, 0, 0.8), #f7b400)',
          pt: { xs: 1, md: 12 },
          pb: { xs: 2.5, md: 2.5 }
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            {/* Hero text section 
            <Grid item xs={12} lg={6}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: { xs: 'center', lg: 'flex-start' },
                  textAlign: { xs: 'center', lg: 'left' },
                  gap: 2,
                  maxWidth: { lg: 450 },
                  color: 'white'
                }}
              >
                <motion.div
                  variants={FadeUp(0.2)}
                  initial="initial"
                  animate="animate"
                >
                  <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                      fontSize: { xs: '2.5rem', lg: '3.75rem' },
                      fontWeight: 'bold',
                      lineHeight: 1.2
                    }}
                  >
                    Join Us in Protecting Nature and Animal Life
                  </Typography>
                </motion.div>
                
                <motion.div
                  variants={FadeUp(0.4)}
                  initial="initial"
                  animate="animate"
                >
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    Together, we restore habitats, protect endangered species, and support animal welfare—every donation brings us closer to a healthier planet.
                  </Typography>
                </motion.div>
                
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: { xs: 'center', lg: 'flex-start' } }}>
                  <Link to="/started" style={{ textDecoration: 'none' }}>
                    <motion.div
                      variants={FadeUp(0.6)}
                      initial="initial"
                      animate="animate"
                    >
                      <Button
                        variant="contained"
                        sx={{
                          bgcolor: '#f7b400',
                          '&:hover': { bgcolor: '#d29b02ff' },
                          px: 3,
                          py: 1,
                          borderRadius: 2,
                          fontWeight: 'bold'
                        }}
                      >
                        Get Started
                      </Button>
                    </motion.div>
                  </Link>
                  
                  <Link to="/login" style={{ textDecoration: 'none' }}>
                    <motion.div
                      variants={FadeUp(0.8)}
                      initial="initial"
                      animate="animate"
                    >
                      <Button
                        variant="outlined"
                        sx={{
                          borderColor: 'white',
                          color: 'white',
                          '&:hover': { borderColor: '#f7b400', backgroundColor: 'rgba(255,255,255,0.1)' },
                          px: 3,
                          py: 1,
                          borderRadius: 2,
                          fontWeight: 'bold'
                        }}
                      >
                        Login
                      </Button>
                    </motion.div>
                  </Link>
                </Box>
              </Box>
            </Grid>

            {/* Form Section 
            <Grid item xs={12} lg={5} mx="120px">
              <motion.div
                variants={FadeUp(0.2)}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <Paper
                  elevation={8}
                  sx={{
                    width: { xs: '90%', md: 400 },
                    mx: 'auto',
                    p: 3,
                    px:'10 px',
                    borderRadius: 4,
                    bgcolor: 'background.paper',
                    color: 'text.primary'
                  }}
                >
                  <Box sx={{ textAlign: 'center', mb: 2 }}>
                    <Typography variant="h6" fontWeight="bold">
                      Quick Donation Form
                    </Typography>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, py: 2, flexWrap: 'wrap' }}>
                      {[1, 5, 10, 99].map((amount) => (
                        <Button
                          key={amount}
                          variant={data.amount === amount ? "contained" : "outlined"}
                          onClick={() => handleAmountButtonClick(amount)}
                          sx={{
                            minWidth: 60,
                            height: 60,
                            borderRadius: 2,
                            fontWeight: 'bold',
                            bgcolor: data.amount === amount ? '#f7b400' : 'transparent',
                            color: data.amount === amount ? 'white' : 'primary.main',
                            borderColor: 'primary.main',
                            '&:hover': {
                              bgcolor: data.amount === amount ? '#000000' : 'rgba(0,119,182,0.1)'
                            }
                          }}
                        >
                          ${amount}
                        </Button>
                      ))}
                    </Box>
                  </Box>

                  <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                      type="number"
                      name="amount"
                      onChange={handleClick}
                      placeholder="Amount"
                      value={data.amount}
                      inputProps={{ min: 1, max: 100 }}
                      variant="outlined"
                      fullWidth
                    />
                    
                    <TextField
                      type="text"
                      name="name"
                      onChange={handleClick}
                      placeholder="Name"
                      variant="outlined"
                      fullWidth
                    />
                    
                    <TextField
                      type="email"
                      name="email"
                      onChange={handleClick}
                      placeholder="Email"
                      variant="outlined"
                      fullWidth
                    />
                    
                    <Button
                      variant="contained"
                      onClick={handleSubmit}
                      sx={{
                        bgcolor: '#f7b400',
                        '&:hover': { bgcolor: '#d29b02ff' },
                        borderRadius: 50,
                        py: 1.5,
                        fontWeight: 'bold',
                        fontSize: '1rem'
                      }}
                      fullWidth
                    >
                      Donate Now
                    </Button>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Hero;*/