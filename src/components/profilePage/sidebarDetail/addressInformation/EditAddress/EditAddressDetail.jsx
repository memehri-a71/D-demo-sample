import React, { useState } from 'react';
import TitleSidebarDetail from '../../TitleSidebarDetail';
import CustomInput from '../../CustomInput'

function EditAddressDetail({ closeModal }) {
    const [isChecked, setIsChecked] = useState(false);
    const checkboxHandler = event => {
        if (event.target.checked == true) {
            setIsChecked(true);
        } else {
            setIsChecked(false);
        }
    }
    return (
        <div className='bg-white rounded-2xl px-10 py-4 w-full'>
            <TitleSidebarDetail title='جزییات آدرس' />
            <div className='flex justify-center items-center text-gray-500 border-2 rounded-lg ml-4 h-32 '>
                نقشه
            </div>
            <CustomInput type='text' label='آدرس تحویل گیرنده *' />
            <div className='flex '>
                <CustomInput type='text' label='پلاک *' />
                <CustomInput type='text' label='واحد *' />
            </div>
            <div className='flex itemes-center mt-4'>
                <input className='w-4 h-4' type="checkbox" value={isChecked} onChange={checkboxHandler} />
                <label className='pr-2 text-sm'>تحویل گیرنده خودم نیستم</label>
            </div>
            {isChecked && <div className='flex'>
                <CustomInput type='text' placeholder='نام تحویل گیرنده' />
                <CustomInput type='text' placeholder='موبایل تحویل گیرنده' />
            </div>}
            <div className='mt-8 ml-4'>
                <div className='flex justify-end'>
                    <button className='border-2 hover:bg-gray-100 focus:bg-red-200 focus:border-red-200 text-red-600 font-semibold rounded-lg px-4 py-2 ml-2'
                        type='button'
                        onClick={closeModal}
                    >
                        بازگشت
                    </button>
                    <button className='bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg px-4 py-2' type='button'>
                        ثبت نهایی آدرس
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EditAddressDetail;