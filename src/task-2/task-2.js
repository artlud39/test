// 2. Кэш данных об облигациях
// Дана функция, которая получает из API данные о финансовых показателях облигаций
// за заданную дату по массиву идентификаторов облигаций (ISIN):
// const getBondsData = async ({date, isins}) => {
//     const result = await http.post({
//         url: `/bonds/${date}`,
//         body: isins
//     });
//     return result;
// };
// Пример вызова функции:
//     getBondsData({
//         date: '20180120',
//         isins: ['XS0971721963', 'RU000A0JU4L3']
//     });
// Результат:
//     [{
//         isin: 'XS0971721963',
//         data: {...}
//     }, {
//         isin: 'RU000A0JU4L3',
//         data: {...}
//     }]
// Задача
// Изменить код функции, реализовав кэш на стороне клиента.
//     Ожидаемое решение
// ● программа на языке JavaScript в виде одного исходного файла или сниппета на
// любом открытом веб-хостинге, без использования сторонних библиотек,
// ● вычислительная сложность алгоритма и оценка необходимой памяти для его
// выполнения.\

const cache = new Map();

const getBondsData = async ({date, isins}) => {
    const cacheKey = `${date}:${isins.join(',')}`;

    if(cache.has(cacheKey)) {
        const cachedData = cache.get(cacheKey);
        const result = await http.post({
            url: `/bonds/${date}`,
            body: isins
        });

        if (isEqual(result, cachedData)) {
            return cachedData;
        } else {
            cache.set(cacheKey, result);
            return result;
        }
    } else {
        const result = await http.post({
            url: `/bonds/${date}`,
            body: isins
        });
        cache.set(cacheKey, result);
        return result;
    }
};


const isEqual = (newData, cashData) => {
    if (newData === cashData) return true;

    if (typeof newData !== typeof cashData) return false;

    if (typeof newData === 'object' && newData !== null && cashData !== null) {
        if (Array.isArray(newData) !== Array.isArray(cashData)) return false;

        if (Array.isArray(newData)) {
            if (newData.length !== cashData.length) return false;
            for (let i = 0; i < newData.length; i++) {
                if (!isEqual(newData[i], cashData[i])) return false;
            }
        } else {
            const keysNewData = Object.keys(newData);
            const keysCashData = Object.keys(cashData);
            if (keysNewData.length !== keysCashData.length) return false;

            for (let key of keysNewData) {
                if (!isEqual(newData[key], cashData[key])) return false;
            }
        }

        return true;
    }

    return false;
};


module.exports = isEqual;
