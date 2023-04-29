import * as nsfw from 'nsfwjs';
import * as tf from '@tensorflow/tfjs-node';

export const POST = async (event) => {

    const model = await nsfw.load();

    let image = event.request.body;

    //  The first argument must be of type string or an instance of Buffer, ArrayBuffer, or Array or an Array-like Object.

    image = Buffer.from(image, 'base64');
    image = tf.node.decodeImage(image, 3);


    // const predictions = await model.classify(imageTensor);

    return new Response(JSON.stringify(), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })




}