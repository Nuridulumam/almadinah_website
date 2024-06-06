import React, {useEffect, useState, useRef} from 'react';
import {
    Box,
    Button, Center,
    Divider,
    Heading,
    Stack, Text
} from "@chakra-ui/react";
import {
    Field,
    Form,
    Formik,
} from "formik";
import {
    formAsyncSelect,
    formInput,
    formSelect,
    formTextArea
} from "../../../component/commons/form/input"
import axios from "axios";
import * as Yup from 'yup'
import {API_URL} from "../../../utils";

const Registration = () => {
    const formRef = useRef();
    let [province, setProvince] = useState([]);
    let [city, setCity] = useState([]);
    let [district, setDistrict] = useState([]);
    let [subDistrict, setSubDistrict] = useState([]);
    const [selectedProv, setSelectedProv] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const getLocation = (type, codeType, search) => {
        axios.get(`${API_URL}/locations/${type}`, {
            params: {
                page: 1,
                length: 10,
                search: search,
                code: codeType
            }
        })
            .then((response) => {
                let data = response.data;
                switch (type) {
                    case 'province':
                        const Prov = data.province.map((item) => {
                            return {
                                value: item.code,
                                label: item.name
                            }
                        });
                        setProvince(Prov);
                        break;
                    case 'city':
                        const City = data.city.map((item) => {
                            return {
                                value: item.code,
                                label: item.name
                            }
                        });
                        setCity(City);
                        break;
                    case 'district':
                        const District = data.district.map((item) => {
                            return {
                                value: item.code,
                                label: item.name
                            }
                        });
                        setDistrict(District);
                        break;
                    case 'subDistrict':
                        const SubDistrict = data.subDistrict.map((item) => {
                            return {
                                value: item.code,
                                label: item.name
                            }
                        });
                        setSubDistrict(SubDistrict);
                        break;
                    default:
                        break;
                }

                return data;
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        getLocation('province');
    }, []);

    useEffect(() => {
        if (selectedProv) {
            getLocation('city', selectedProv)
        }
        if (selectedCity) {
            getLocation('district', selectedCity)
        }
        if (selectedDistrict) {
            getLocation('subDistrict', selectedDistrict)
        }
    }, [selectedProv, selectedCity, selectedDistrict]);

    let status = [
        {label: 'Wali', value: "wali"},
        {label: 'Ayah', value: "ayah"},
        {label: 'Ibu', value: "ibu"},
    ]
    return (
        <Stack
            width={{base: '100%', lg: '50vw', md: '90vw'}}
            margin={{base: '1rem 0 3rem', md: '4rem 0 5rem 0'}}
            padding={'2rem 1rem'}
            borderRadius={'0.5rem'}
            shadow={'lg'}
            borderColor={'blackAlpha.400'}
            spacing={8}
            direction={'column'}
        >
            <Heading fontSize={{base: '2xl', md: '3xl'}}>
                PSDB Al Madinah Diwek Jombang
            </Heading>
            <Text fontSize={{base: 'sm', md: 'md'}}>Formulir registrasi akun wali / orang tua calon santri baru Yayasan Al Madinah Diwek Jombang</Text>
            <Divider/>
            <Box maxW={{base: '100%', md: '90vh', lg: '100vh'}}>
                <Box
                    backgroundColor={'blackAlpha.200'}
                    padding={'0.5rem'}
                    mb={'1rem'}
                    borderRadius={'0.3rem'}
                    width={{base: '100%', md: '50vh'}}
                >
                    <Text>Yang bertanda (<span style={{color: 'red'}}> * </span>) wajib diisi</Text>
                </Box>
                <Formik
                    innerRef={formRef}
                    initialValues={{
                        name: '',
                        asOrtu: '',
                        alamat: '',
                        province: '',
                        city: '',
                        district: '',
                        subDistrict: '',
                        rt: '',
                        rw: '',
                        email: '',
                        password: '',
                    }}
                    validationSchema={Yup.object({
                        name: Yup.string()
                            .required('Required'),
                    })}
                    onSubmit={(values, {setSubmitting}) => {
                        axios.post(`${API_URL}/registration`, {
                            name: values.name,
                            asOrtu: values.asOrtu,
                            alamat: values.alamat,
                            province: values.province,
                            city: values.city,
                            district: values.district,
                            subDistrict: values.subDistrict,
                            rt: values.rt,
                            rw: values.rw,
                            email: values.email,
                            password: values.new_password
                        })
                            .then((response) => {
                                setSubmitting(false)
                            })
                            .catch((error) => {
                                console.log(error);
                            })
                    }}>
                    <Form>
                        <Field
                            name={'name'}
                            label={'Nama Lengkap'}
                            placeholder={'Masukkan nama lengkap'}
                            style={{
                                'isRequired': true,
                                'shadow': 'sm',
                            }}
                            component={formInput}
                        />
                        <Field
                            name={'asOrtu'}
                            label={'Sebagai'}
                            placeholder={'Pilih status sebagai'}
                            options={status}
                            style={{
                                'isRequired': true,
                                'shadow': 'sm',
                                'mt': '1rem'
                            }}
                            component={formSelect}
                        />
                        <Field
                            name={'alamat'}
                            isRequired
                            label={'Alamat'}
                            placeholder={'Masukkan Alamat'}
                            style={{
                                'isRequired': true,
                                'shadow': 'sm',
                                'mt': '1rem'
                            }}
                            component={formTextArea}
                        />
                        <Stack mt={'1rem'} spacing={10} direction={{base: 'column', md: 'column', lg: 'row'}}>
                            <Field
                                isRequired
                                name={'province'}
                                label={'Provinsi'}
                                placeholder={'Pilih Provinsi'}
                                defaultOptions={province}
                                selected={(data) => {
                                    setSelectedProv(data)
                                }}
                                style={{
                                    'isRequired': true,
                                    'shadow': 'sm',
                                    'mt': '1rem'
                                }}
                                component={formAsyncSelect}
                            />
                            <Field
                                name={'city'}
                                isRequired
                                label={'Kota'}
                                placeholder={'Pilih Kota'}
                                defaultOptions={city}
                                selected={(data) => {
                                    setSelectedCity(data)
                                }}
                                selectedProv={selectedProv}
                                style={{
                                    'isRequired': true,
                                    'shadow': 'sm',
                                    'mt': '1rem'
                                }}
                                component={formAsyncSelect}
                            />
                            <Field
                                name={'district'}
                                isRequired
                                label={'Kecamatan'}
                                placeholder={'Pilih Kecamatan'}
                                defaultOptions={district}
                                selected={(data) => {
                                    setSelectedDistrict(data)
                                }}
                                selectedCity={selectedCity}
                                style={{
                                    'isRequired': true,
                                    'shadow': 'sm',
                                    'mt': '1rem'
                                }}
                                component={formAsyncSelect}
                            />
                        </Stack>
                        <Stack mt={'1rem'} spacing={10} direction={{base: 'column', lg: 'row'}}>
                            <Field
                                name={'subDistrict'}
                                isRequired
                                label={'Desa'}
                                placeholder={'Pilih Desa'}
                                defaultOptions={subDistrict}
                                selectedDistrict={selectedDistrict}
                                style={{
                                    'isRequired': true,
                                    'shadow': 'sm',
                                    'mt': '1rem'
                                }}
                                component={formAsyncSelect}
                            />
                            <Field
                                name={'rt'}
                                isRequired
                                label={'RT'}
                                placeholder={'Masukkan RT'}
                                style={{
                                    'isRequired': true,
                                    'shadow': 'sm',
                                    'mt': '1rem'
                                }}
                                component={formInput}
                            />
                            <Field
                                name={'rw'}
                                isRequired
                                label={'RW'}
                                placeholder={'Masukkan RW'}
                                style={{
                                    'isRequired': true,
                                    'shadow': 'sm',
                                    'mt': '1rem'
                                }}
                                component={formInput}
                            />
                        </Stack>
                        <Center mt={'3rem'} display={'flex'} flexDirection={'column'}>
                            <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
                                <Divider width={'100px'} border={'1px'} borderRadius={'50%'}/>
                                <Text textAlign={'center'} fontSize={'18px'} m={'0.5rem'} fontWeight={'700'}>Informasi Akun</Text>
                                <Divider width={'100px'} border={'1px'} borderRadius={'50%'}/>
                            </Box>
                            <Text fontSize={'11px'}>{'digunakan ketika login sistem PSDB Al Madinah'}</Text>
                        </Center>
                        <Box mt={'1rem'} p={'1rem'} borderRadius={'10px'}>
                            <Stack spacing={10} direction={{base: 'column', lg: 'row'}}>
                                <Field
                                    name={'email'}
                                    type={'email'}
                                    isRequired
                                    label={'Email'}
                                    placeholder={'Masukkan email'}
                                    style={{
                                        'isRequired': true,
                                        'shadow': 'sm',
                                    }}
                                    component={formInput}
                                />
                            </Stack>
                            <Stack mt={'1rem'} spacing={10} direction={{base: 'column', lg: 'row'}}>
                                <Field
                                    name={'new_password'}
                                    type={'password'}
                                    isRequired
                                    label={'Kata Sandi'}
                                    placeholder={'Masukkan kata sandi'}
                                    style={{
                                        'isRequired': true,
                                        'shadow': 'sm',
                                        'mt': '1rem'
                                    }}
                                    component={formInput}
                                />
                                <Field
                                    name={'confirm_new_password'}
                                    type={'password'}
                                    isRequired
                                    label={'Konfirmasi Kata Sandi'}
                                    placeholder={'Masukkan konfirmasi kata sandi'}
                                    style={{
                                        'isRequired': true,
                                        'shadow': 'sm',
                                        'mt': '1rem'
                                    }}
                                    component={formInput}
                                />
                            </Stack>
                        </Box>
                        <Button bgColor={'green.400'} color={'white'} float={'right'} m={'2rem 0.5rem 0 0'} type={'submit'}> Daftar </Button>
                    </Form>
                </Formik>
            </Box>
        </Stack>
    );
};

export default Registration;
