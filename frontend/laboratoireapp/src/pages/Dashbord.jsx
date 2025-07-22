import React from 'react'
import './Dashbord.css'
import Logo from '../assets/LaboImage.jpg';
import Calendar from '../components/Calendar';

function Dashbord() {
    return (
        <div className='container-dashbord grid grid-cols-5 gap-8'>
            <section className="overview bg-white">
                <h3 className="opacity-[.7] text-white">Overview</h3>
                <div className="statistiques grid grid-cols-5">
                    <div className='text-center text-white'>
                        <h2 className='font-bold'>12</h2>
                        <p className='font-medium'>Spécialités</p>
                    </div>
                    <div className='text-center text-white'>
                        <h2 className='font-bold'>12</h2>
                        <p className='font-medium'>Spécialités</p>
                    </div>
                    <div className='text-center text-white'>
                        <h2 className='font-bold'>12</h2>
                        <p className='font-medium'>Spécialités</p>
                    </div>
                    <div className='text-center text-white'>
                        <h2 className='font-bold'>12</h2>
                        <p className='font-medium'>Spécialités</p>
                    </div>
                    <div className='text-center text-white'>
                        <h2 className='font-bold'>12</h2>
                        <p className='font-medium'>Spécialités</p>
                    </div>
                </div>
            </section>
            <section className="patient-record bg-white rounded-[7px]">
                <div className="patient-record-content text-white rounded-[7px]">
                    <div className="content rounded-[7px]">
                        <h2 className='font-medium text-xs'>Find Patient's Record</h2>
                        <p className='text-xs opacity-[.8]'>Get acces to patient’s record for laboratory test requests and processing.</p>
                        <a className='bg-white rounded-[4px] font-medium text-xs'>Fiend Patient ></a>
                    </div>
                </div>
            </section>
            <section className="specialites grid grid-cols-3 gap-5">
                <div className="specialite grid grid-cols-2 items-center gap-10 bg-white rounded-[5px]">
                    <div className="specialite-number">
                        <p className='font-medium text-xs opacity-[.6]'>Specialite</p>
                        <span className='font-medium text-sm'>12</span>
                    </div>
                    <div className="specialite-logo bg-amber-600 w-8 rounded-[5px]">
                        <svg width="20" height="20" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.6545 17.971L15.0279 10.0019V2.2475H16.8607V0.644531H5.86377V2.2475H7.6966V10.0019L1.07001 17.971C0.670304 18.4515 0.430367 19.0193 0.376751 19.6116C0.323135 20.2039 0.457931 20.7976 0.766224 21.3271C1.07452 21.8566 1.54429 22.3011 2.12355 22.6116C2.70281 22.922 3.36899 23.0862 4.04836 23.0861H18.6752C19.3546 23.0862 20.0208 22.922 20.6 22.6116C21.1793 22.3011 21.6491 21.8566 21.9574 21.3271C22.2657 20.7976 22.4005 20.2039 22.3468 19.6116C22.2932 19.0193 22.0533 18.4515 21.6536 17.971H21.6545ZM9.52943 10.5228V2.2475H13.1951V10.5228L15.6447 13.4683H7.07986L9.52943 10.5228ZM18.6762 21.4831H4.04928C3.70818 21.4828 3.37381 21.4001 3.08309 21.244C2.79236 21.088 2.55658 20.8648 2.40177 20.5989C2.24695 20.3331 2.17912 20.0351 2.20577 19.7376C2.23242 19.4402 2.3525 19.1551 2.55277 18.9136L5.74739 15.0712H16.9771L20.1727 18.9136C20.3729 19.1551 20.493 19.4402 20.5197 19.7376C20.5463 20.0351 20.4785 20.3331 20.3237 20.5989C20.1689 20.8648 19.9331 21.088 19.6423 21.244C19.3516 21.4001 19.0173 21.4828 18.6762 21.4831Z" fill="#F8F8F8"/>
                        </svg>
                    </div>
                </div>
                <div className="specialite grid grid-cols-2 items-center gap-10 bg-white rounded-[5px]">
                    <div className="specialite-number">
                        <p className='font-medium text-xs opacity-[.6]'>Specialite</p>
                        <span className='font-medium text-sm'>12</span>
                    </div>
                    <div className="specialite-logo bg-amber-600 w-8 rounded-[5px]">
                        <svg width="20" height="20" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.6545 17.971L15.0279 10.0019V2.2475H16.8607V0.644531H5.86377V2.2475H7.6966V10.0019L1.07001 17.971C0.670304 18.4515 0.430367 19.0193 0.376751 19.6116C0.323135 20.2039 0.457931 20.7976 0.766224 21.3271C1.07452 21.8566 1.54429 22.3011 2.12355 22.6116C2.70281 22.922 3.36899 23.0862 4.04836 23.0861H18.6752C19.3546 23.0862 20.0208 22.922 20.6 22.6116C21.1793 22.3011 21.6491 21.8566 21.9574 21.3271C22.2657 20.7976 22.4005 20.2039 22.3468 19.6116C22.2932 19.0193 22.0533 18.4515 21.6536 17.971H21.6545ZM9.52943 10.5228V2.2475H13.1951V10.5228L15.6447 13.4683H7.07986L9.52943 10.5228ZM18.6762 21.4831H4.04928C3.70818 21.4828 3.37381 21.4001 3.08309 21.244C2.79236 21.088 2.55658 20.8648 2.40177 20.5989C2.24695 20.3331 2.17912 20.0351 2.20577 19.7376C2.23242 19.4402 2.3525 19.1551 2.55277 18.9136L5.74739 15.0712H16.9771L20.1727 18.9136C20.3729 19.1551 20.493 19.4402 20.5197 19.7376C20.5463 20.0351 20.4785 20.3331 20.3237 20.5989C20.1689 20.8648 19.9331 21.088 19.6423 21.244C19.3516 21.4001 19.0173 21.4828 18.6762 21.4831Z" fill="#F8F8F8"/>
                        </svg>
                    </div>
                </div>
                <div className="specialite grid grid-cols-2 items-center gap-10 bg-white rounded-[5px]">
                    <div className="specialite-number">
                        <p className='font-medium text-xs opacity-[.6]'>Specialite</p>
                        <span className='font-medium text-sm'>12</span>
                    </div>
                    <div className="specialite-logo bg-amber-600 w-8 rounded-[5px]">
                        <svg width="20" height="20" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.6545 17.971L15.0279 10.0019V2.2475H16.8607V0.644531H5.86377V2.2475H7.6966V10.0019L1.07001 17.971C0.670304 18.4515 0.430367 19.0193 0.376751 19.6116C0.323135 20.2039 0.457931 20.7976 0.766224 21.3271C1.07452 21.8566 1.54429 22.3011 2.12355 22.6116C2.70281 22.922 3.36899 23.0862 4.04836 23.0861H18.6752C19.3546 23.0862 20.0208 22.922 20.6 22.6116C21.1793 22.3011 21.6491 21.8566 21.9574 21.3271C22.2657 20.7976 22.4005 20.2039 22.3468 19.6116C22.2932 19.0193 22.0533 18.4515 21.6536 17.971H21.6545ZM9.52943 10.5228V2.2475H13.1951V10.5228L15.6447 13.4683H7.07986L9.52943 10.5228ZM18.6762 21.4831H4.04928C3.70818 21.4828 3.37381 21.4001 3.08309 21.244C2.79236 21.088 2.55658 20.8648 2.40177 20.5989C2.24695 20.3331 2.17912 20.0351 2.20577 19.7376C2.23242 19.4402 2.3525 19.1551 2.55277 18.9136L5.74739 15.0712H16.9771L20.1727 18.9136C20.3729 19.1551 20.493 19.4402 20.5197 19.7376C20.5463 20.0351 20.4785 20.3331 20.3237 20.5989C20.1689 20.8648 19.9331 21.088 19.6423 21.244C19.3516 21.4001 19.0173 21.4828 18.6762 21.4831Z" fill="#F8F8F8"/>
                        </svg>
                    </div>
                </div>
            </section>
            <section className="labaoratory bg-white rounded-[5px] flex justify-between gap-20 items-center">
                <div>
                    <p className='opacity-[.6] text-sm'>Built for lab techniciens</p>
                    <h3 className='font-medium' style={{marginBlock:15}}>Labaoratory information systeme</h3>
                    <p className='text-xs opacity-[0.6]'> New, pending and completed  laboratory test request sond
                        new pending and completed New, pending and completed
                        dont pending and completed.
                    </p>
                    <a href="" className='test-template-link text-white rounded-[5px]'>View test template ></a>
                </div>
                <div className='labo-icon rounded-[7px]'>
                    <svg width="72" height="76" viewBox="0 0 72 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M69.7104 58.4769L51.548 31.581V5.41002H56.5715V0H26.4308V5.41002H31.4542V31.581L13.2919 58.4769C12.1964 60.0984 11.5388 62.0147 11.3918 64.0138C11.2449 66.0128 11.6143 68.0167 12.4593 69.8037C13.3043 71.5906 14.5918 73.091 16.1795 74.1387C17.7672 75.1865 19.593 75.7408 21.4551 75.7403H61.5447C63.4068 75.7408 65.2326 75.1865 66.8203 74.1387C68.4079 73.091 69.6955 71.5906 70.5405 69.8037C71.3854 68.0167 71.7549 66.0128 71.6079 64.0138C71.461 62.0147 70.8034 60.0984 69.7078 58.4769H69.7104ZM36.4777 33.3392V5.41002H46.5246V33.3392L53.2384 43.2801H29.7638L36.4777 33.3392ZM61.5472 70.3302H21.4576C20.5227 70.3292 19.6062 70.0499 18.8094 69.5233C18.0126 68.9967 17.3664 68.2433 16.942 67.3461C16.5177 66.449 16.3318 65.443 16.4048 64.4393C16.4779 63.4355 16.807 62.473 17.3559 61.658L26.1118 48.6902H56.8905L65.6489 61.658C66.1978 62.473 66.5269 63.4355 66.6 64.4393C66.673 65.443 66.4871 66.449 66.0628 67.3461C65.6384 68.2433 64.9922 68.9967 64.1954 69.5233C63.3986 70.0499 62.4821 70.3292 61.5472 70.3302Z" fill="#F8F8F8"/>
                    <path d="M11.9622 44.1721C13.0459 44.1721 13.9244 43.0143 13.9244 41.586C13.9244 40.1578 13.0459 39 11.9622 39C10.8785 39 10 40.1578 10 41.586C10 43.0143 10.8785 44.1721 11.9622 44.1721Z" fill="#F8F8F8"/>
                    <path d="M52.9622 66.1721C54.0459 66.1721 54.9244 65.0143 54.9244 63.586C54.9244 62.1578 54.0459 61 52.9622 61C51.8785 61 51 62.1578 51 63.586C51 65.0143 51.8785 66.1721 52.9622 66.1721Z" fill="#F8F8F8"/>
                    <path d="M42.9622 61.1721C44.0459 61.1721 44.9244 60.0143 44.9244 58.586C44.9244 57.1578 44.0459 56 42.9622 56C41.8785 56 41 57.1578 41 58.586C41 60.0143 41.8785 61.1721 42.9622 61.1721Z" fill="#F8F8F8"/>
                    <path d="M43.9622 40.1721C45.0459 40.1721 45.9244 39.0143 45.9244 37.586C45.9244 36.1578 45.0459 35 43.9622 35C42.8785 35 42 36.1578 42 37.586C42 39.0143 42.8785 40.1721 43.9622 40.1721Z" fill="#F8F8F8"/>
                    <path d="M11.9811 36.586C12.523 36.586 12.9622 36.0071 12.9622 35.293C12.9622 34.5789 12.523 34 11.9811 34C11.4393 34 11 34.5789 11 35.293C11 36.0071 11.4393 36.586 11.9811 36.586Z" fill="#F8F8F8"/>
                    <path d="M11.9811 32.586C12.523 32.586 12.9622 32.0071 12.9622 31.293C12.9622 30.5789 12.523 30 11.9811 30C11.4393 30 11 30.5789 11 31.293C11 32.0071 11.4393 32.586 11.9811 32.586Z" fill="#F8F8F8"/>
                    <path d="M0 22V26.4708H3.09468V64.4724C3.09468 67.4367 3.9098 70.2796 5.36071 72.3757C6.81163 74.4718 8.77949 75.6493 10.8314 75.6493C12.8833 75.6493 14.8512 74.4718 16.3021 72.3757C17.753 70.2796 18.5681 67.4367 18.5681 64.4724V26.4708H21.6628V22H0ZM15.4734 26.4708V55.5308H10.8314C10.8314 54.938 10.6684 54.3694 10.3782 53.9502C10.088 53.531 9.69443 53.2955 9.28405 53.2955C8.87367 53.2955 8.4801 53.531 8.18992 53.9502C7.89973 54.3694 7.73671 54.938 7.73671 55.5308H6.18937V26.4708H15.4734Z" fill="#F8F8F8"/>
                    </svg>
                </div>
            </section>
            <section className="tasks bg-white">
                <div className="tasks-header flex justify-between">
                    <p className='tasks-header-title'>Scheduled Tasks</p>
                    <a href="" className='text-white rounded-[5px]'>Add Task</a>
                </div>
                <div className="tasks-content">
                    <table className='text-sm'>
                        <tr>

                        <th>Tasks</th>
                        <th>Date & Time</th>
                        <th></th>
                        </tr>
                        <tr className='opacity-[0.6] font-medium'>
                            <td>Call Roselyn Barium</td>
                            <td>26-12-2023 </td>
                            <td>2:38 pm</td>
                        </tr>
                        <tr className='opacity-[0.6] font-medium'>
                            <td>Call Roselyn Barium</td>
                            <td>26-12-2023</td>
                            <td>2:38 pm</td>
                        </tr>
                    </table>
                </div>
            </section>
            <section className="tests bg-white rounded-[7px]">
                <h4 className='tests-latest-title text-sm font-semibold'>Dernier test planifier</h4>
                <table className='w-full'>
                    <thead>
                        <tr>
                            <th className='text-sm font-medium '></th>
                            <th className='text-sm font-medium '>Patient</th>
                            <th className='text-sm font-medium '>phone</th>
                            <th className='text-sm font-medium '>type d'analyse</th>
                            <th className='text-sm font-medium '>date</th>
                            <th className='text-sm font-medium '>Etat</th>
                            <th className='text-sm font-medium '>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='text-sm opacity-[0.5] font-medium place-items-center text-center'>101</td>
                            <td className='text-sm opacity-[0.5] font-medium place-items-center text-center'>Ahmed</td>
                            <td className='text-sm opacity-[0.5] font-medium place-items-center text-center'>26179812</td>
                            <td className='text-sm opacity-[0.5] font-medium place-items-center text-center'>Analyse de sang</td>
                            <td className='text-sm opacity-[0.5] font-medium place-items-center text-center'>26-09-2025</td>
                            <td className='text-sm opacity-[0.5] font-medium place-items-center text-center'>Planifié</td>
                            <td className='text-sm opacity-[0.5] font-medium place-items-center text-center'>
                                <svg className='cursor-pointer' width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 5C1 5 3.1 1 8 1C12.9 1 15 5 15 5C15 5 12.9 9 8 9C3.1 9 1 5 1 5Z" stroke="#B5B7C0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M7.99987 6.71434C9.15967 6.71434 10.0999 5.94683 10.0999 5.00005C10.0999 4.05328 9.15967 3.28577 7.99987 3.28577C6.84007 3.28577 5.89987 4.05328 5.89987 5.00005C5.89987 5.94683 6.84007 6.71434 7.99987 6.71434Z" stroke="#B5B7C0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </td>
                        </tr>
                    </tbody>
    
                </table>
            </section>
            <section className="bg-red-50">
            </section>
        </div>
    )
}

export default Dashbord
