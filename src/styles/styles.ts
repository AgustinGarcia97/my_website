import {navbar} from "../assets/style_values.ts"
import "../assets/fonts/lato/lato.css"

export const navbar_style = {
    appbar:{
        display:"flex",
        backgroundColor:"#000",
        width:"100vw",
        justifyContent:"center",
        padding: {sm:"15px",md:"10px",lg:'10px',xl:'10px'},
        borderBottom: "2px solid",
        borderColor:"#1e1e1e"
    },
    list:{
        display:"flex",
        height: "auto",
        width:"100%",
        marginLeft:navbar.list.size.marginLeft,
        marginRight:navbar.list.size.marginRight,
        padding:navbar.list.size.padding,
        gap: { xs: 0, sm:"20px" , md: "20px" , lg:"20px" , xl: "50px" },
        justifyContent:"start",
    },
    burgerMenu:{
      display: {xs:'flex',sm:'none',md:'none'},
    },
    listItem:{
        display:{xs:'none',sm:'flex',md:'flex'},
        backgroundColor:"rgba(225,225,225,0)",
        height: "auto",
        alignItems:"center",
        justifyContent:"center",
        width:{
            xs:navbar.listItem.size.xs,
            sm:navbar.listItem.size.sm,
            md:navbar.listItem.size.md,
            lg:navbar.listItem.size.lg,
            xl:navbar.listItem.size.xl
        },
        borderTopLeftRadius: "20px",
        borderTopRightRadius:  "20px",
        borderBottomLeftRadius:  "20px",
        borderBottomRightRadius:  "20px",
        border: "1px solid transparent",
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            boxShadow: '5px -12px 83px -8px rgba(129,0,255,0.73)',
            transition: 'all 0.3s ease-in-out',
            border: "2px solid",
            borderColor: '#4a1673',
        },
    },
    typography:{
        fontFamily:"'Lato Black', sans-serif",
        color:'#e3e3e3',
        fontSize:{xs:12,sm:"20px",md:"17px",lg:"18px",xl:"20px"},
    }
}

//HOME

export const home = {
    box:{
        flexGrow: 1,
        marginTop: {xs:"-50px", sm:"80px", md:"",xl:'100px'},

    },

    grid:{
        grid_item:{
            padding:{xs:4,sm:4,md:4,lg:4,xl:"20px"},
            display:'flex',
            justifyContent:'center',
            alignItems:"center",
            flexDirection:'column',



        },
        grid_item_first:{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
            gap:{xs:"10px"},
            height:600,

        },
        title:{
            fontSize:{xs:"50px",sm:"70px",md:"50px",lg:"90px",xl:"100px"},
            whiteSpace: { xs: 'nowrap' },
            fontFamily:"'Lato Black', sans-serif",
            color:'#e3e3e3',
            textShadow: `
                            -2px -2px 0 #6c6a6a,
                            2px -2px 0 #6c6a6a,
                            -2px 2px 0 #6c6a6a,
                            2px 2px 0 #6c6a6a
                        `,
            transition: 'all 0.3s ease-in-out',
            textAlign:'center',
        },
        subtitle:{
            fontSize:{xs:"30px",sm:"40px",md:"30px",lg:"40px",xl:"50px"},
            fontFamily:"'Lato Black', sans-serif",
            color:'#e3e3e3',
            textShadow: `
                            -2px -2px 0 #6c6a6a,
                            2px -2px 0 #6c6a6a,
                            -2px 2px 0 #6c6a6a,
                            2px 2px 0 #6c6a6a
                        `,
            transition: 'all 0.3s ease-in-out',
            textAlign:'center',
            whiteSpace: { xs: 'nowrap' }
        }
    },
    about_me:{
        box:{

            width: {xs:"100vw",sm:"95vw",lg:"90vw",xl:'90%'},
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            gap:'30px',
            padding:{xs:"0px",xl:'50px'},


        },
        title:{
            fontSize:{xs:"50px",sm:"65px",md:"60px",lg:"60px",xl:"70px"},
            whiteSpace: { xs: 'nowrap' },
            fontFamily:"'Lato Black', sans-serif",
            color:'#e3e3e3',
            textShadow: `
                            -2px -2px 0 #6c6a6a,
                            2px -2px 0 #6c6a6a,
                            -2px 2px 0 #6c6a6a,
                            2px 2px 0 #6c6a6a
                        `,
            transition: 'all 0.3s ease-in-out',
            textAlign:'center',
        },
        text:{
            padding:'10px',
            fontSize:{xs:"25px",sm:"25px",md:12,lg:"28px",xl:"30px"},
            fontFamily:"'Lato Black', sans-serif",
            color:'#e3e3e3',
            textAlign:{xs:"center"},

            textShadow: `
                            -1px -1px 0 #6c6a6a,
                            1px -1px 0 #6c6a6a,
                            -1px 1px 0 #6c6a6a,
                            1px 1px 0 #6c6a6a
                        `,
        }

    },
    contact:{
        box_container:{
            minHeight: {xl:'50vh'},
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            py: { xs: 4, sm: 8 },

        },
        box_form:{
            width: { xs: '85vw', sm: '75vw', md: "80vw", lg:"60vw", xl: "35vw" },
            bgcolor: 'rgba(255,255,255,0.38)',
            borderRadius: 3,
            boxShadow: '0 8px 52px 0 rgba(31, 38, 135, 0.25)',
            p: { xs: 2, sm: 4, md: 3 },
        },
        typography:{
            fontWeight: 700,
            mb: 3,
            color:"#e3e3e3",

            fontFamily:"'Lato Black', sans-serif",
            textAlign: 'left',
            fontSize:{xs:'20px',md:"",lg:'23px',xl:'20px'},
            background: 'linear-gradient(90deg, hsla(306, 38%, 46%, 1) 0%, hsla(18, 66%, 42%, 1) 46%, hsla(352, 74%, 43%, 1) 100%)',
            padding:'10px',
            border:"2px solid",
            borderColor:'rgba(136,136,136,0.66)',
            borderRadius:'10px'
        },
        grid_container:{
            backgroundColor:'#ffffff',
            padding:'15px',
            borderRadius:'10px',
            border:"2px solid", borderColor:'rgba(136,136,136,0.66)',
        },
        typography_input:{
            mb: 0.5,
            fontWeight: 500,
            fontFamily:"'Lato Black', sans-serif",
            fontSize:{xs:"18px",sm:"22px",md:"15px",lg:"20px",xl:"15px"},
        },
        grid_two:{
            display:'flex', flexDirection:'column', align:'center'
        },
        button:{
            mt: 1,
            bgcolor: 'linear-gradient(90deg, #43cea2 0%, #185a9d 100%)',
            color: 'white',
            fontWeight: 600,
            fontSize: 16,
            borderRadius: 1.5,
            boxShadow: 'none',
            height: 44,
            background: 'linear-gradient(90deg, hsla(306, 38%, 46%, 1) 0%, hsla(18, 66%, 42%, 1) 46%, hsla(352, 74%, 43%, 1) 100%)',
        }

    }

}

export const skills_style = {
    list:{
        display:'flex',
        flexWrap:'wrap',
        gap:{xs:'10px',xl:'20px'},
        justifyContent:'center',
        width:{xs:'100vw',xl:'60vw'}

    }
}