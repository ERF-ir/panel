import * as yup from "yup";


export const postValidation = yup.object({
    title: yup.string().required("فیلد عنوان الزامی است").min(5,'باید بیشتر از ۵ کاراکتر باشد'),
    summery: yup.string().required("فیلد خلاصه الزامی است").min(5,'باید بیشتر از ۱۰ کاراکتر باشد'),
    body: yup.string().required("فیلد بدنه الزامی است").min(5,'باید بیشتر از ۱۰ کاراکتر باشد'),
    category_id: yup.string().required("انتخاب زیر دسته الزامی است"),
    image: yup.mixed()
        .test('image','انتخاب تصویر الزامی است',(value) => {
            return value.length > 0
        }).test('image','حجم تصویر نباید بیشتر از ۱ مگابایت باشد',(value) => {
            return  value.length > 0 && value[0].size / 1024 <= 1024;
        })
        .test('image','فرمت تصویر باید jpg یا png باشد',(value) => {
            let formats = ['image/png', 'image/jpeg'];
            return value.length > 0 && formats.includes(value[0].type);
        })

});
export const publicDiscountValidation = yup.object({

    title: yup.string().required("فیلد عنوان الزامی است"),
    percentage: yup.string().required("مقدار تخفیف الزامی است"),

});

