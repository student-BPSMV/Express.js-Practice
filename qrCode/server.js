const express = require("express");
const path = require("path");
const QRCode = require("qrcode");

const app = express();

app.use(express.json());


// Serve frontend files
app.use(express.static(path.join(__dirname, "src")));


// Generate QR Code
app.get("/qrCodeGen", async (req, res) => {

    const textURL = req.query.text;

    if (!textURL) {
        return res.status(400).send("Invalid Data");
    }

    try {

        const qrBufferImage = await QRCode.toBuffer(textURL);

        res.setHeader("Content-Type", "image/png");

        res.send(qrBufferImage);

    } catch (error) {

        console.log(error);

        res.status(500).send("Error generating QR Code");
    }
});


app.listen(4000, () => {
    console.log("Server is running on http://localhost:4000");
});