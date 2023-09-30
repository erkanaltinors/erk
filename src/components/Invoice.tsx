import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import {IMaskInput} from "react-imask";
import { useState } from "react";
import { Popover,PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { Button } from "./ui/button";
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import ReactPDF, { PDFViewer, Text, Document, Page, View, StyleSheet, Font } from "@react-pdf/renderer";
import FontJuraRegular from '../fonts/Jura-Regular.ttf';
import FontJuraSemiBold from '../fonts/Jura-SemiBold.ttf';
const Invoice : React.FC = () => {
 type Inputs = {
  name: string,
  address: string,
  date: Date,
  companyName: string,
  companyAddress: string,
  companyZipcode: string,
  companyState: string,
  consultancyPrice: string,
  bankCharge: string,
  exchangeRate: string
 }
  const {
    handleSubmit,
    control,
    formState:{errors: formError}
  } = useForm<Inputs>();

  const onSubmit:SubmitHandler<Inputs> = (data: any) => {
    console.log(data);
    setDate(data.date);
  }

  const [date, setDate] = useState<string>();
  const [name, setName] = useState<string>('');
  const [address, setAddress] = useState<string>('');

  Font.register({family: 'Jura', fonts:[
    {src: FontJuraRegular},
    {src: FontJuraSemiBold, fontWeight: 'semibold'}
  ]});
  const styles = StyleSheet.create({
    page: { backgroundColor: 'white', fontFamily: 'Jura', },
    section: { color: 'black', marginHorizontal: 10, marginTop: 40, marginBottom: 20 },
    invoice: {fontSize: 24, fontWeight: 600, backgroundColor: '#001524', color: 'white', paddingHorizontal: 10, marginBottom: 20},
    fullName: {fontSize: 28, color: '#001524',}
  });

  return (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="cols-span-1 flex items-center justify-center">
      <form id="invoiceForm" onSubmit={handleSubmit(onSubmit)} className="flex-1">
      <div className="grid grid-cols-3 gap-1">
          <div className="col-span-3">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 font-bold text-lg">Ad Soyad</label>
              <Controller
                name="name"
                control={control}
                defaultValue={name}
                rules={{
                  required: {
                    value: true,
                    message: 'Lütfen adınızı girin.'
                  }
                }
                }
                render={
                  ({field}) => 
                    <IMaskInput
                      name="name"
                      id="name"
                      value={name}
                      type="text"
                      defaultValue={name}
                      onAccept={(value) => setName(value)}
                      mask={/^[a-zA-ZğüşıöçĞÜŞİÖÇ ]+$/}
                      onChange={field.onChange}
                      inputRef={field.ref}
                      className="px-2 py-1 border rounded-sm border-gray-500"
                    />
                }
              />
              <small className="block h-5 text-red-500 text-sm">{formError?.name?.message}</small>
            </div>
          </div>
          <div className="col-span-3">
            <div className="flex flex-col">
              <label htmlFor="address" className="mb-2 font-bold text-lg">Adres</label>
              <Controller
                name="address"
                control={control}
                defaultValue={address}
                rules={{
                  required:{
                    value: true,
                    message: 'Lütfen adresinizi girin.'
                  },
                  minLength:{
                    value: 10,
                    message: 'Lütfen adresinizi eksiksiz girin.'
                  }
                }}
                  render={
                    ({ field }) =>
                      <IMaskInput
                        name="address"
                        id="address"
                        value={address}
                        type="text"
                        defaultValue={address}
                        mask={/^[a-zA-ZğüşıöçĞÜŞİÖÇ0-9\-.\/\\: ]+$/}
                        onAccept={(value) => setAddress(value)}
                        onChange={field.onChange}
                        inputRef={field.ref}
                        className="px-2 py-1 border rounded-sm border-gray-500"
                      />
                  }
              />
                <small className="block h-5 text-red-500 text-sm">{formError?.address?.message}</small>
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex flex-col">
              <label htmlFor="date" className="mb-2 font-bold text-lg">Fatura Tarihi</label>
              <Controller
                name="date"
                control={control}
                rules={{
                  required:{
                    value: true,
                    message: 'Lütfen tarih seçin.'
                  }
                }}
                render={
                  ({field}) =>
                  <Popover>
                <PopoverTrigger asChild>
                    <Button
                      variant={"default"}
                      className="w-full pl-3 text-left font-normal !bg-white"
                    >
                      {field.value ? (
                        format(field.value, "dd LLLL yyyy")
                      ) : (
                        <span>Tarih Seçin</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="center">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
                }
              />
                <small className="block h-5 text-red-500 text-sm">{formError?.date?.message}</small>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex flex-col">
              <label htmlFor="companyName" className="mb-2 font-bold text-lg">Şirket Adı</label>
              <Controller
                name="companyName"
                control={control}
                  rules={{
                    required: {
                      value: true,
                      message: 'Lütfen şirket adını girin.'
                    },
                  }}
                  render={
                    ({ field }) =>
                      <IMaskInput
                        name="companyName"
                        type="text"
                        mask={/^[a-zA-ZğüşıöçĞÜŞİÖÇ. ]+$/}
                        onChange={field.onChange}
                        inputRef={field.ref}
                        className="px-2 py-1 border rounded-sm border-gray-500"
                      />
                  }
              />
              <small className="block h-5 text-red-500 text-sm">{formError?.companyName?.message}</small>
            </div>
          </div>
          <div className="col-span-3">
            <div className="flex flex-col">
              <label htmlFor="companyAddress" className="mb-2 font-bold text-lg">Şirket Adresi</label>
                <Controller
                  name="companyAddress"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: 'Lütfen adresinizi girin.'
                    },
                    minLength: {
                      value: 10,
                      message: 'Lütfen adresinizi eksiksiz girin.'
                    }
                  }}
                  render={
                    ({ field }) =>
                      <IMaskInput
                        name="companyAddress"
                        mask={/^[a-zA-ZğüşıöçĞÜŞİÖÇ0-9\-.\/\\ ]+$/}
                        onChange={field.onChange}
                        inputRef={field.ref}
                        className="px-2 py-1 border rounded-sm border-gray-500"
                      />
                  }
                />
                <small className="block h-5 text-red-500 text-sm">{formError?.companyAddress?.message}</small>
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex flex-col">
              <label htmlFor="companyZipcode" className="mb-2 font-bold text-lg">Posta Kodu</label>
                <Controller
                  name="companyZipcode"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: 'Lütfen posta kodunu girin.'
                    }
                  }}
                  render={
                    ({ field }) =>
                      <IMaskInput
                        name="companyZipcode"
                        type="text"
                        mask={/^[0-9]{0,5}$/}
                        onChange={field.onChange}
                        inputRef={field.ref}
                        className="px-2 py-1 border rounded-sm border-gray-500"
                      />
                  }
                />
                <small className="block h-5 text-red-500 text-sm">{formError?.companyZipcode?.message}</small>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex flex-col">
              <label htmlFor="companyState" className="mb-2 font-bold text-lg">Eyalet</label>
                <Controller
                  name="companyState"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: 'Lütfen eyaleti girin.'
                    }
                  }}
                  render={
                    ({ field }) =>
                      <IMaskInput
                        name="companyState"
                        mask={/^[A-Za-z]{0,2}$/}
                        type="text"
                        onChange={field.onChange}
                        inputRef={field.ref}
                        className="px-2 py-1 border rounded-sm border-gray-500"
                      />
                  }
                />
                <small className="block h-5 text-red-500 text-sm">{formError?.companyState?.message}</small>
            </div>
          </div>
          <div className="col-span-3">
            <div className="flex flex-col">
              <label htmlFor="consultancyPrice" className="mb-2 font-bold text-lg">Danışmanlık Ücreti (TRY)</label>
                <Controller
                  name="consultancyPrice"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: 'Lütfen danışmanlık ücretini girin.'
                    }
                  }}
                  render={
                    ({ field }) =>
                      <IMaskInput
                        name="consultancyPrice"
                        type="text"
                        mask={Number}
                        scale={0}
                        min={0}
                        onChange={field.onChange}
                        inputRef={field.ref}
                        className="px-2 py-1 border rounded-sm border-gray-500"
                      />
                  }
                />
                <small className="block h-5 text-red-500 text-sm">{formError?.consultancyPrice?.message}</small>
            </div>
          </div>
          <div className="col-span-3">
            <div className="flex flex-col">
              <label htmlFor="bankCharge" className="mb-2 font-bold text-lg">Banka Ücreti</label>
                <Controller
                  name="bankCharge"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: 'Lütfen banka ücretini girin.'
                    }
                  }}
                  render={
                    ({ field }) =>
                      <IMaskInput
                        name="bankCharge"
                        type="text"
                        mask={Number}
                        min={0}
                        onChange={field.onChange}
                        inputRef={field.ref}
                        className="px-2 py-1 border rounded-sm border-gray-500"
                      />
                  }
                />
                <small className="block h-5 text-red-500 text-sm">{formError?.bankCharge?.message}</small>
            </div>
          </div>
          <div className="col-span-3">
            <div className="flex flex-col">
              <label htmlFor="exchangeRate" className="mb-2 font-bold text-lg">Kur</label>
                <Controller
                  name="exchangeRate"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: 'Lütfen kur bilgisini girin.'
                    }
                  }}
                  render={
                    ({ field }) =>
                      <IMaskInput
                        name="exchangeRate"
                        type="text"
                        mask={Number}
                        min={0}
                        onChange={field.onChange}
                        inputRef={field.ref}
                        className="px-2 py-1 border rounded-sm border-gray-500"
                      />
                  }
                />
                <small className="block h-5 text-red-500 text-sm">{formError?.exchangeRate?.message}</small>
            </div>
          </div>
      </div>
          <button type="submit" className="bg-slate-900 text-white px-3 py-2 rounded-sm w-full my-2">Generate</button>
        </form>
    </div>
    <div className="col-span-1">
      <div className="h-screen w-full flex items-center">
        {/* <PDFViewer width={600} height={840} showToolbar={false}>
          <Document>
            <Page size="A4" style={styles.page}>
              <View style={styles.section}>
                  <Text style={styles.invoice}>INVOICE</Text>
                  <Text style={styles.fullName}>{name}</Text>
              </View>
            </Page>
          </Document>
        </PDFViewer> */}
        <div className="w-2/3 aspect-[1/1.41] bg-white mx-auto my-auto shadow-sm px-2 py-3">
          <p className="bg-slate-800 text-white p-2 rounded-sm">INVOICE</p>
          <div className="flex justify-between">
            <div className="w-1/2">
                <p className="text-xl m-0">{name}</p>
                <div>
                  <p className="text-xs m-0">{address}</p>
                </div>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Invoice;