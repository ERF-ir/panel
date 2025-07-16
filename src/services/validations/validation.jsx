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
    start_at: yup.string().required("تاریخ شروع الزامی است"),
    end_at: yup.string().required("تاریخ پایان الزامی است"),


});
export const couponDiscountValidation = yup.object({

    title: yup.string().required("فیلد عنوان الزامی است"),
    coupon_code: yup.string().required("مقدار کد تخفیف الزامی است"),
    type: yup.string().required("انتخاب نوع تخفیف الزامی است"),
    percentage: yup.string().required("مقدار تخفیف الزامی است"),
    start_at: yup.string().required("تاریخ شروع الزامی است"),
    end_at: yup.string().required("تاریخ پایان الزامی است"),
});


  export const registerValidation = yup.object({

      name : yup.string().required('فیلد عنوان الزامی است'),
      email : yup.string().required('فیلد ایمیل اجباری است').email('فرمت ایمیل اشتباه است'),
      password : yup.string().required('رمز عبور اجباری است').min(8,'پسوورد باید حداقل هشت کاراکتر باشد'),


      image: yup.mixed()
          .test('image','انتخاب تصویر الزامی است',(value) => {
              return value.length > 0
          })
          .test('image','فرمت تصویر باید jpg یا png باشد',(value) => {
              let formats = ['image/png', 'image/jpeg'];
              return value.length > 0 && formats.includes(value[0].type);
          })

  })
export const loginValidation = yup.object({


      email : yup.string().required('فیلد ایمیل اجباری است').email('فرمت ایمیل اشتباه است'),
      password : yup.string().required('رمز عبور اجباری است').min(8,'پسوورد باید حداقل هشت کاراکتر باشد'),

  })



