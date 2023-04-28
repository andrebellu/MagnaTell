import * as nsfw from 'nsfwjs';
import * as tf from '@tensorflow/tfjs-node';

export const POST = async (event) => {

    const model = await nsfw.load();

    let image = event.request.body;
    let imageBuffer = Buffer.from(String(image), 'base64');
    let imageTensor = tf.node.decodeImage(imageBuffer, 3);

    const predictions = await model.classify(imageTensor);

    return new Response(JSON.stringify(predictions), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })




}