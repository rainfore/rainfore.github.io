// padStart for Safari
String.prototype.padStart = function (maxLength, fillString) {
    if (!fillString)
        fillString = ' ';
    const diff = maxLength - this.length;
    return diff <= 0 ? this : fillString.repeat(Math.ceil(diff / fillString.length)).slice(0, diff) + this;
};

const CRYPTS = {
    // 恺撒密码
    cesar: (() => {
        // 0 <= key <= 26
        const key = 3;

        return {
            encrypt(text) {
                text = text.toUpperCase(); // 只解决大写字母

                // 流密钥算法
                return text.split('').map((letter) => {
                    const pos = 65 + ((letter.charCodeAt() - 65 + key) % 26 + 26) % 26;
                    return String.fromCharCode(pos);
                }).join('');
            },
            decrypt(text) {
                text = text.toUpperCase(); // 只解决大写字母

                // 流密钥算法
                return text.split('').map((letter) => {
                    const pos = 65 + ((letter.charCodeAt() - 65 - key) % 26 + 26) % 26;
                    return String.fromCharCode(pos);
                }).join('');
            },
        };
    })(),
    // 随机恺撒密码
    randomCesar: (() => {
        // key的情况有A26,26
        const key = 'MNBVCXZASDFGHJKLPOIUYTREWQ';
        const enKey = key.split('');
        const deKey = [];
        enKey.forEach((letter, index) => deKey[letter.charCodeAt() - 65] = String.fromCharCode(65 + index));

        return {
            encrypt(text) {
                text = text.toUpperCase(); // 只解决大写字母

                return text.split('').map((letter) => enKey[letter.charCodeAt() - 65]).join('');
            },
            decrypt(text) {
                text = text.toUpperCase(); // 只解决大写字母

                return text.split('').map((letter) => deKey[letter.charCodeAt() - 65]).join('');
            },
        };
    })(),

    des: (() => {
        const key = '今天我想'.split('').map((char) => char.charCodeAt().toString(2).padStart(16, '0')).join('').split('');

        const Ip = [
            58, 50, 42, 34, 26, 18, 10, 2,
            60, 52, 44, 36, 28, 20, 12, 4,
            62, 54, 46, 38, 30, 22, 14, 6,
            64, 56, 48, 40, 32, 24, 16, 8,
            57, 49, 41, 33, 25, 17, 9, 1,
            59, 51, 43, 35, 27, 19, 11, 3,
            61, 53, 45, 37, 29, 21, 13, 5,
            63, 55, 47, 39, 31, 23, 15, 7,
        ];
        const Ip_ = [
            40, 8, 48, 16, 56, 24, 64, 32,
            39, 7, 47, 15, 55, 23, 63, 31,
            38, 6, 46, 14, 54, 22, 62, 30,
            37, 5, 45, 13, 53, 21, 61, 29,
            36, 4, 44, 12, 52, 20, 60, 28,
            35, 3, 43, 11, 51, 19, 59, 27,
            34, 2, 42, 10, 50, 18, 58, 26,
            33, 1, 41, 9, 49, 17, 57, 25,
        ];
        const PC1 = [
            57, 49, 41, 33, 25, 17, 9,
            1, 58, 50, 42, 34, 26, 18,
            10, 2, 59, 51, 43, 35, 27,
            19, 11, 3, 60, 52, 44, 36,
            63, 55, 47, 39, 31, 23, 15,
            7, 62, 54, 46, 38, 30, 22,
            14, 6, 61, 53, 45, 37, 29,
            21, 13, 5, 28, 20, 12, 4,
        ];

        for (let i = 0; i < 64; i++) {
            Ip[i]--;
            Ip_[i]--;
        }
        for (let i = 0; i < 56; i++) {
            PC1[i]--;
        }

        return {
            encrypt(text) {
                const binary = '和你约会'.split('').map((char) => char.charCodeAt().toString(2).padStart(16, '0')).join('').split('');
                console.log('binary', binary);

                const first = [];
                Ip.forEach((pos, index) => first[index] = binary[pos]);
                console.log(first);
            },
            decrypt(text) {
                return this.encrypt();
            },
        };
    })(),
};

const print = (method, text) => {
    const cipherText = CRYPTS[method].encrypt(text);
    const plainText = CRYPTS[method].decrypt(cipherText);
    console.log(text, '->', cipherText);
    console.log(cipherText, '->', plainText);
};

print('cesar', 'ABXY');
print('randomCesar', 'ABXY');
print('des', '和你约会');
