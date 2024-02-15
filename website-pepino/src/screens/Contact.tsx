import { Box } from "@mui/material"
import { ContactUs } from "../components/ContactForm"
import './Contact.css'
export const Contact = () => {
    return(
        <div className="ContactBody">
            <Box sx={{background:"#484848", paddingTop:"10px", paddingBottom:"10px"}}>
          
                <h2 className='TitleAbout' style={{fontSize: "2.8rem", display:"flex",justifyContent:"center"}}>Contactez moi !</h2>
                <ContactUs/>
            </Box>
        </div>
    )
}