export const getPagination = (pageQuery?: string, limitQuery?: string) => {
    const page = Math.max(Number(pageQuery) || 1, 1);
    const limit = Math.min(Math.max(Number(limitQuery) || 10, 1), 50);

    return { page, limit };
};
