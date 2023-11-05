import { transpoter, mailOptions } from '../../ui/config/nodemailer'

export const POST = async (req: any, res: any) => {
    const data = await req.json();
    try {
        await transpoter.sendMail({
            ...mailOptions,
            subject: 'New Request',
            text: 'This is a test string',
            html: "<h1>Test title</h1> <p>Somo body</p>"
        }) 

        return res.status(200).json({success: true})
    } catch (error) {
        console.error(error);
        return res.status(400).json({message: 'Bad Request'})
    }
    

}