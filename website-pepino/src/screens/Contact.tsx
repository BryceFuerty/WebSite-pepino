import { Box, Typography } from "@mui/material"
import { ContactUs } from "../components/ContactForm"
import './Contact.css'
export const Contact = () => {
    return(
        <div className="ContactBody">
           
           <Box sx={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center', display: 'flow-root' }}>
                <ContactUs/>
            </Box>
        </div>
    )
}