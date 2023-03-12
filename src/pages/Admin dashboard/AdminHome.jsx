// import React from 'react';
// import styled from '@emotion/styled';
// import { Drawer } from '@mui/material';

// // import FeaturedInfo from './components/FeaturedInfo';
// // import ChartComp from './components/chart/ChartComp';
// // import SidebarComponent from './components/SidebarComponent';
// // import WidgetLg from './components/WidgetLg';
// // import WidgetSm from './components/WidgetSm';
// import MDBox from '../../components/MDBox';

// export const Sidebar = styled(Drawer)(({ theme, ownerState }) => {
//   const { palette, boxShadows, transitions, breakpoints, functions } = theme;
//   const { transparentSidenav, whiteSidenav, miniSidenav, darkMode } =
//     ownerState;

//   const { transparent, gradients, white, background } = palette;
//   const { xxl } = boxShadows;
//   const { pxToRem, linearGradient } = functions;

//   const sidebarWidth = 250;
//   const backgroundValue = white.main;

//   // styles for the sidenav when miniSidenav={false}
//   const drawerOpenStyles = () => ({
//     background: backgroundValue,
//     transform: 'translateX(0)',
//     transition: transitions.create('transform', {
//       easing: transitions.easing.sharp,
//       duration: transitions.duration.shorter
//     }),

//     [breakpoints.up('xl')]: {
//       boxShadow: transparentSidenav ? 'none' : xxl,
//       marginBottom: transparentSidenav ? 0 : 'inherit',
//       left: '0',
//       width: sidebarWidth,
//       transform: 'translateX(0)',
//       transition: transitions.create(['width', 'background-color'], {
//         easing: transitions.easing.sharp,
//         duration: transitions.duration.enteringScreen
//       })
//     }
//   });

//   return {
//     '& .MuiDrawer-paper': {
//       boxShadow: xxl,
//       border: 'none',
//       ...drawerOpenStyles()
//     }
//   };
// });

// const AdminHome = () => (
//   <Sidebar
//     {...rest}
//     variant="permanent"
//     ownerState={{ transparentSidenav, whiteSidenav, miniSidenav, darkMode }}
//   >
//     <MDBox pt={3} pb={1} px={4} textAlign="center">
//       <MDBox
//         display={{ xs: 'block', xl: 'none' }}
//         position="absolute"
//         top={0}
//         right={0}
//         p={1.625}
//         onClick={closeSidenav}
//         sx={{ cursor: 'pointer' }}
//       >
//         <MDTypography variant="h6" color="secondary">
//           <Icon sx={{ fontWeight: 'bold' }}>close</Icon>
//         </MDTypography>
//       </MDBox>
//       <MDBox component={NavLink} to="/" display="flex" alignItems="center">
//         {brand && (
//           <MDBox component="img" src={brand} alt="Brand" width="2rem" />
//         )}
//         <MDBox
//           width={!brandName && '100%'}
//           sx={(theme) => sidenavLogoLabel(theme, { miniSidenav })}
//         >
//           <MDTypography
//             component="h6"
//             variant="button"
//             fontWeight="medium"
//             color={textColor}
//           >
//             {brandName}
//           </MDTypography>
//         </MDBox>
//       </MDBox>
//     </MDBox>
//     <Divider
//       light={
//         (!darkMode && !whiteSidenav && !transparentSidenav) ||
//         (darkMode && !transparentSidenav && whiteSidenav)
//       }
//     />
//     <List>{renderRoutes}</List>
//     <MDBox p={2} mt="auto">
//       <MDButton
//         component="a"
//         href="https://www.creative-tim.com/product/material-dashboard-pro-react"
//         target="_blank"
//         rel="noreferrer"
//         variant="gradient"
//         color={sidenavColor}
//         fullWidth
//       >
//         upgrade to pro
//       </MDButton>
//     </MDBox>
//   </Sidebar>
// );

// export default AdminHome;
