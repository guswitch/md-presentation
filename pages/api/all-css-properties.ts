import type { NextApiRequest, NextApiResponse } from 'next';
import {readFileSync} from 'fs-extra';

function AllCSSProperties(req: NextApiRequest, res: NextApiResponse) {
    try {
        // fse.readJSON('../constants/all-css-properties.json')
        // .then(data => {
        //     console.log(data)
        //     // const customer = JSON.parse(data)
        //     // const allProperties
        //     // console.log(customer)

            
        // })
        // .catch(err => console.log(err));
        const jsonBuffer = readFileSync("../../constants/all-css-properties.json");
        const allCssJson = jsonBuffer.toJSON();
        console.log(allCssJson)
      } catch(err) {
        console.log(err)
      }

      return res.json({txt: 'hello'})
}

export default AllCSSProperties;