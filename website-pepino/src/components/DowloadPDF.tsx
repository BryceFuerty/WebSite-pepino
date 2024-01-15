import React from 'react';
import instructionsPDF from './pdfs/instructions.pdf';
import { Button,Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
    greyButton: {
        backgroundColor: '#CCCCCC !important',
        color: 'black !important',
        '&:hover': {
          backgroundColor: '#E2e2e2 !important',
        },
      },
}));

export const PDFDownloader = () => {
    const classes = useStyles();

    const handleDownloadClick = () => {
        // Construisez le chemin du fichier PDF dans le dossier public
        const pdfPath = process.env.PUBLIC_URL + instructionsPDF;

        // Créez un élément <a> avec l'attribut 'download' pour le téléchargement
        const link = document.createElement('a');
        link.href = pdfPath;
        link.download = 'Instructions_Tattoo.pdf';

        // Ajoutez l'élément à la page et déclenchez le clic
        document.body.appendChild(link);
        link.click();

        // Supprimez l'élément après le téléchargement
        document.body.removeChild(link);
    };

    return (
        <div>
            <Button className={classes.greyButton} onClick={handleDownloadClick} variant="contained" >PDF Download</Button>
        </div>
    );
};

