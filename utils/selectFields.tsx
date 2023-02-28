export const selectFields = ({ id = 0, by = '', url = '', time = 0, title='', score=0, karma=0, userUrl='' } = {}) => ({
    id,
    by,
    url,
    time,
    title,
    score,
    karma,
    userUrl,
});