import React from 'react';
import {
    Box,
    Button,
    Divider,
    Heading,
    Stack, Text
} from "@chakra-ui/react";
import {
    Field,
    Formik
} from "formik";
import {
    formInput,
    formSelect,
    formTextArea
} from "../../../component/commons/form/input"

const Registration = () => {

    let levels = [
        {label: 'Hanya Pondok', value: 1},
        {label: 'SMP', value: 2},
        {label: 'SMA', value: 3},
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
            <Text fontSize={{base: 'sm', md: 'md'}}>Formulir pendaftaran Penerimaan Santri Baru Yayasan Al Madinah Diwek Jombang</Text>
            <Divider/>
            <Box width={{base: '100%', md: '90vh', lg: '100vh'}}>
                <Box
                    backgroundColor={'blackAlpha.200'}
                    padding={'0.5rem'}
                    mb={'1rem'}
                    borderRadius={'0.3rem'}
                    width={{base: '100%', md:'50vh'}}
                >
                    <Text>Yang bertanda (<span style={{color: 'red'}}> * </span>) wajib diisi</Text>
                </Box>
                <Formik initialValues={{name: ""}} onSubmit={''}>
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      }) => (
                          <form onSubmit={handleSubmit}>
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
                              <Stack mt={'1rem'} spacing={10} direction={{base: 'column', lg: 'row'}}>
                                  <Field
                                      isRequired
                                      label={'Provinsi'}
                                      placeholder={'Pilih Provinsi'}
                                      style={{
                                          'isRequired': true,
                                          'shadow': 'sm',
                                      }}
                                      component={formSelect}
                                  />
                                  <Field
                                      isRequired
                                      label={'Kota'}
                                      placeholder={'Pilih Kota'}
                                      style={{
                                          'isRequired': true,
                                          'shadow': 'sm',
                                          'mt': '1rem'
                                      }}
                                      component={formSelect}
                                  />
                                  <Field
                                      isRequired
                                      label={'Kecamatan'}
                                      placeholder={'Pilih Kecamatan'}
                                      style={{
                                          'isRequired': true,
                                          'shadow': 'sm',
                                          'mt': '1rem'
                                      }}
                                      component={formSelect}
                                  />
                              </Stack>
                              <Stack mt={'1rem'} spacing={10} direction={{base: 'column', lg: 'row'}}>
                                  <Field
                                      isRequired
                                      label={'Desa'}
                                      placeholder={'Pilih Desa'}
                                      style={{
                                          'isRequired': true,
                                          'shadow': 'sm',
                                      }}
                                      component={formSelect}
                                  />
                                  <Field
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
                              <Field
                                  isRequired
                                  label={'Jenjang'}
                                  placeholder={'Pilih Jenjang yang dipilih'}
                                  style={{
                                      'isRequired': true,
                                      'shadow': 'sm',
                                      'mt': '1rem'
                                  }}
                                  options={levels}
                                  component={formSelect}
                              />
                              <Button bgColor={'green.400'} color={'white'} float={'right'} m={'2rem 0.5rem 0 0'} type={'submit'}> Daftar </Button>
                          </form>
                    )}
                </Formik>
            </Box>
        </Stack>
    );
};

export default Registration;
