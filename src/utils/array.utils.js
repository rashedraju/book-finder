export const removeDuplicateObjectFromArray = (data, on, key) => {
    const title = [];
    const uniq = data.filter((item) => {
        if (title.includes(item[on][key])) {
            return false;
        } else {
            title.push(item[on][key]);
            return true;
        }
    });
    return uniq;
};
