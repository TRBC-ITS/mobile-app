import postscribe from 'postscribe';

export class PostscribeScriptValueConverter {
    toView(value, target) {
        const SCRIPT_REG = /<script[\s\S]*>[\s\S]*<\/script>/ig;
        let matches = SCRIPT_REG.exec(value);
        let hasMatch = matches.length > 0;

        if(hasMatch) {
            matches.forEach((match) => postscribe(`#${target}`, match));

            document.getElementById(target).classList.add("has-video");
        }

        return value
    }
}
