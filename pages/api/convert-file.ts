import type { NextApiRequest, NextApiResponse } from 'next';
import { execSync } from 'child_process';
import fse from 'fs-extra';

function ConvertFile(req: NextApiRequest, res: NextApiResponse) {

    console.log('params:', req.query);

    // Gererating a random name for the file
    let randomName = Math.random() * 1000000;

    if (req.query.saveAs == "pdf") {
        // Generating md and pdf file
        fse.outputFile(`./tmp/files/markdown/${randomName}.md`, req.body)
            .then(() => {
                console.log('File created')
                execSync(`npx marp --pdf ./tmp/files/markdown/${randomName}.md -o ./tmp/files/slide/${randomName}.pdf`);
            })
            .catch((err) => console.error(err));

        setTimeout(() => {
            let file = fse.readFileSync(`./tmp/files/slide/${randomName}.pdf`);
            if (file) {
                const base64File = Buffer.from(file).toString('base64');
                return res.status(200).json({ file: base64File });
            }

            return res.status(500).json({ msg: 'Não foi possivel gerar o arquivo' });
        }, 2000)
    } else {
        // Generating md and pdf file
        fse.outputFile(`./tmp/files/markdown/${randomName}.md`, req.body)
            .then(() => {
                console.log('File created')
                execSync(`npx marp --pptx ./tmp/files/markdown/${randomName}.md -o ./tmp/files/pptx/${randomName}.pptx`);
            })
            .catch((err) => console.error(err));

        setTimeout(() => {
            let file = fse.readFileSync(`./tmp/files/pptx/${randomName}.pptx`);
            if (file) {
                const base64File = Buffer.from(file).toString('base64');
                return res.status(200).json({ file: base64File });
            }

            return res.status(500).json({ msg: 'Não foi possivel gerar o arquivo' });
        }, 2000)
    }

    //    return res.status(200).json({file: 'base64File'});
}

export default ConvertFile;