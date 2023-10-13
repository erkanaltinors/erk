import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import {IMaskInput} from "react-imask";
import { useState, useRef } from "react";
import { Popover,PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { Button } from "./ui/button";
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Text, Document, Page, View, StyleSheet, Font, PDFDownloadLink } from "@react-pdf/renderer";
import FontJuraRegular from '../fonts/Jura-Regular.ttf';
import FontJuraSemiBold from '../fonts/Jura-SemiBold.ttf';

const toTitleCase = (word: string) => {
  return word.split(' ').map((letter: string) => letter.charAt(0).toLocaleUpperCase('tr-TR') + letter.substring(1,)).join(' ');
}
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

  const pdfRef = useRef<HTMLButtonElement>(null);

  const onSubmit:SubmitHandler<Inputs> = () => {
    if(pdfRef.current){
      pdfRef.current.click();
    }
  }

  const [date, setDate] = useState<Date>(new Date());
  const [name, setName] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [companyAddress, setCompanyAddress] = useState<string>('');
  const [companyZipcode, setCompanyZipCode] = useState<string>('');
  const [companyState, setCompanyState] = useState<string>('CA');
  const [consultancyPrice, setConsultancyPrice] = useState<string>('0');
  const [bankCharge, setBankCharge] = useState<string>('20');
  const [exchangeRate, setExchangeRate] = useState<string>('0');

  Font.register({family: 'Jura', fonts:[
    {src: FontJuraRegular},
    {src: FontJuraSemiBold, fontWeight: 'semibold'}
  ]});
  const styles = StyleSheet.create({
    page: { backgroundColor: 'white', fontFamily: 'Jura', color: '#001524', fontSize: 16 },
    section: { color: 'black', marginHorizontal: 10, marginTop: 40, marginBottom: 20 },
    subSection: {paddingVertical: 10},
    invoice: {fontSize: 14, fontWeight: 600, backgroundColor: '#001524', color: 'white', paddingHorizontal: 10, paddingVertical: 5},
    fullName: {fontSize: 16, lineHeight: 1, fontWeight: 600},
    address: {fontSize: 14, width: '60%', lineHeight: 1.5, marginVertical: 10},
    heading: {flexDirection: 'row', justifyContent: 'space-between'},
    date: { fontSize: 16},
    bill: { fontSize: 14, fontWeight: 600, backgroundColor: '#1f5c91', color: 'white', paddingHorizontal: 10, marginBottom: 10, paddingVertical: 5, paddingLeft: 5},
    row: {flexDirection: 'row'},
    rowBetween: {flexDirection: 'row', justifyContent: 'space-between'},
    state: {fontSize: 14},
    tableRowGray: { flexDirection: 'row', fontSize: 14, justifyContent: 'space-between', backgroundColor: '#ebebeb', border: '2px solid #e0e0e0', borderTop: 0, borderBottom: 0, paddingHorizontal: 10, paddingVertical: 10},
    tableRowWhite: { flexDirection: 'row', fontSize: 14, justifyContent: 'space-between', border: '2px solid #e0e0e0', borderTop: 0, paddingHorizontal: 10, paddingVertical: 10 },
    subTotal: { fontSize: 14, backgroundColor: '#388fdf', fontWeight: 600, color: '#fff', paddingHorizontal: 15, paddingVertical: 10, marginBottom: 10},
    tax: { fontSize: 14, backgroundColor: '#2c6598', color: '#fff', fontWeight: 600, paddingHorizontal: 15, paddingVertical: 10, marginBottom: 10 },
    total: { backgroundColor: '#1c4871', fontSize: 14, color: '#fff', fontWeight: 600, paddingHorizontal: 15, paddingVertical: 10, marginBottom: 10 }
  });

  const InvoiceDocument = () => {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <View style={styles.subSection}>
              <Text style={styles.invoice}>INVOICE</Text>
            </View>
            <View style={styles.heading}>
              <Text style={styles.fullName}>{name}</Text>
              <Text style={styles.date}>{format(date, 'dd LLLL yyyy')}</Text>
            </View>
            <Text style={styles.address}>{address}</Text>
            <Text style={styles.bill}>BILL TO</Text>
            <Text style={styles.fullName}>{companyName}</Text>
            <Text style={styles.address}>{companyAddress}</Text>
            <View style={styles.row}>
              <Text style={styles.state}>{companyZipcode},</Text>
              <Text style={styles.state}> {companyState.toUpperCase()}</Text>
            </View>
            <View style={styles.subSection}>
              <Text style={styles.invoice}>DESCRIPTION</Text>
              <View style={styles.tableRowGray}>
                <Text>{format(date, 'LLLL')} Consultancy Services</Text>
                <Text>{Number(consultancyPrice) / Number(exchangeRate) > 1 ? Math.ceil(Number(consultancyPrice) / Number(exchangeRate)).toFixed(2) : null}</Text>
              </View>
              <View style={styles.tableRowWhite}>
                <Text>Bank Charges</Text>
                <Text>{Number(bankCharge).toFixed(2)}</Text>
              </View>
            </View>
            <View style={styles.rowBetween}>
              <View style={styles.subSection}>
                <Text>Exchange Rate: {Number(exchangeRate).toFixed(2)} TRY/USD</Text>
                <Text>{Number(consultancyPrice) / Number(exchangeRate) > 1 ? Math.round(Number(consultancyPrice) / Number(exchangeRate)).toFixed(2) : null} USD ({consultancyPrice} / {Number(exchangeRate).toFixed(2)})</Text>
              </View>
              <View style={styles.subSection}>
                <Text style={styles.subTotal}>Sub-total: {Math.ceil((Number(consultancyPrice) / Number(exchangeRate)) + Number(bankCharge)).toFixed(2)} USD</Text>
                <Text style={styles.tax}>Tax Rate: % 0</Text>
                <Text style={styles.total}>Total: {Math.ceil((Number(consultancyPrice) / Number(exchangeRate)) + Number(bankCharge)).toFixed(2)} USD</Text>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    );
  }

  return (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="cols-span-1 flex items-center justify-center">
      <div className="flex-1">
          <form id="invoiceForm">
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
                      ({ field }) =>
                        <IMaskInput
                          name="name"
                          id="name"
                          type="text"
                          value={name}
                          defaultValue={name}
                          onAccept={(value) => setName(toTitleCase(value))}
                          mask={/^[a-zA-ZğüşıöçĞÜŞİÖÇ ]+$/}
                          onChange={field.onChange}
                          onInput={field.onChange}
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
                          name="address"
                          id="address"
                          value={address}
                          type="text"
                          defaultValue={address}
                          mask={/^[a-zA-ZğüşıöçĞÜŞİÖÇ0-9\-.\/\\: ]+$/}
                          onAccept={(value) => setAddress(toTitleCase(value))}
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
                    defaultValue={date}
                    rules={{
                      required: {
                        value: true,
                        message: 'Lütfen tarih seçin.'
                      }
                    }}
                    render={
                      ({ field }) =>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"default"}
                              className="w-full pl-3 text-left font-normal !bg-white"
                            >
                              {field.value ? (
                                format(field.value, "dd LLLL yyyy")
                              ) : (
                                format(date, "dd LLLL yyyy")
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="center">
                            <Calendar
                              mode="single"
                              selected={field.value ? field.value : date}
                              onSelect={field.onChange}
                              onDayClick={(value) => setDate(value)}
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
                    defaultValue={companyName}
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
                          value={companyName}
                          defaultValue={companyName}
                          mask={/^[a-zA-ZğüşıöçĞÜŞİÖÇ. ]+$/}
                          onChange={field.onChange}
                          onAccept={(value) => setCompanyName(toTitleCase(value))}
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
                    defaultValue={companyAddress}
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
                          value={companyAddress}
                          defaultValue={companyAddress}
                          mask={/^[a-zA-ZğüşıöçĞÜŞİÖÇ0-9\-.\/\\ ]+$/}
                          onChange={field.onChange}
                          onAccept={(value) => setCompanyAddress(toTitleCase(value))}
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
                    defaultValue={companyZipcode}
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
                          value={companyZipcode}
                          defaultValue={companyZipcode}
                          mask={/^[0-9]{0,5}$/}
                          onChange={field.onChange}
                          inputRef={field.ref}
                          className="px-2 py-1 border rounded-sm border-gray-500"
                          onAccept={(value) => setCompanyZipCode(value)}
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
                    defaultValue={companyState}
                    rules={{
                      required: {
                        value: true,
                        message: 'Lütfen eyaleti girin.'
                      },
                      minLength: {
                        value: 2,
                        message: 'Lütfen eyaleti eksiksiz girin.'
                      }
                    }}
                    render={
                      ({ field }) =>
                        <IMaskInput
                          name="companyState"
                          value={companyState}
                          defaultValue={companyState}
                          mask={/^([A-Za-z]{0,2})$/}
                          type="text"
                          prepare={(value) => value.toUpperCase()}
                          onChange={field.onChange}
                          onInput={field.onChange}
                          onAccept={(value) => setCompanyState(value)}
                          inputRef={field.ref}
                          className="px-2 py-1 border rounded-sm border-gray-500"
                        />
                    }
                  />
                  <small className="block h-5 text-red-500 text-sm">{formError?.companyState?.message}</small>
                </div>
              </div>
              <div className="col-span-3 md:col-span-1">
                <div className="flex flex-col">
                  <label htmlFor="consultancyPrice" className="mb-2 font-bold text-lg">Danışmanlık Ücreti (TRY)</label>
                  <Controller
                    name="consultancyPrice"
                    defaultValue={consultancyPrice}
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
                          value={consultancyPrice}
                          defaultValue={consultancyPrice}
                          mask={Number}
                          scale={0}
                          min={0}
                          onChange={field.onChange}
                          onAccept={(value) => setConsultancyPrice(value)}
                          inputRef={field.ref}
                          className="px-2 py-1 border rounded-sm border-gray-500"
                        />
                    }
                  />
                  <small className="block h-5 text-red-500 text-sm">{formError?.consultancyPrice?.message}</small>
                </div>
              </div>
              <div className="col-span-3 md:col-span-1">
                <div className="flex flex-col">
                  <label htmlFor="bankCharge" className="mb-2 font-bold text-lg">Banka Ücreti</label>
                  <Controller
                    name="bankCharge"
                    control={control}
                    defaultValue={bankCharge}
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
                          value={bankCharge}
                          defaultValue={bankCharge}
                          onChange={field.onChange}
                          onAccept={(value) => setBankCharge(value)}
                          inputRef={field.ref}
                          className="px-2 py-1 border rounded-sm border-gray-500"
                        />
                    }
                  />
                  <small className="block h-5 text-red-500 text-sm">{formError?.bankCharge?.message}</small>
                </div>
              </div>
              <div className="col-span-3 md:col-span-1">
                <div className="flex flex-col">
                  <label htmlFor="exchangeRate" className="mb-2 font-bold text-lg">Kur</label>
                  <Controller
                    name="exchangeRate"
                    control={control}
                    defaultValue={exchangeRate}
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
                          radix="."
                          mapToRadix={[',']}
                          value={exchangeRate}
                          defaultValue={exchangeRate}
                          onChange={field.onChange}
                          inputRef={field.ref}
                          onAccept={(value) => setExchangeRate(value)}
                          className="px-2 py-1 border rounded-sm border-gray-500"
                        />
                    }
                  />
                  <small className="block h-5 text-red-500 text-sm">{formError?.exchangeRate?.message}</small>
                </div>
              </div>
            </div>
            <button type="button" onClick={handleSubmit(onSubmit)} className="bg-slate-900 text-white px-3 py-2 rounded-sm w-full my-2">Fatura Oluştur</button>
          </form>
          <PDFDownloadLink document={<InvoiceDocument />} fileName={`${name.split(' ').join('-')}-${format(date, 'LLLL-yyyy')}.pdf`}>
            <button type="button" ref={pdfRef} className="invisible">Download Invoice</button>
          </PDFDownloadLink>
      </div>

    </div>
    <div className="col-span-1">
      <div className="h-screen w-full flex items-center">
        <div className="w-full md:w-2/3 xl:w-[600px] aspect-[1/1.41] bg-white mx-auto my-auto shadow-sm px-2 py-3">
          <p className="bg-slate-800 text-white p-2 rounded-sm">INVOICE</p>
          <div className="flex justify-between">
            <div className="w-3/5">
                <p className="m-0 text-base ">{name}</p>
                <div>
                  <p className="text-xs m-0">{address}</p>
                </div>
            </div>
            <div className="w-2/5 flex justify-end">
              <p className="m-0">{format(date, "dd LLLL yyyy")}</p>
            </div>
            <div>
            </div>
          </div>
          <p className="bg-sky-900 text-white py-1 px-2 rounded-sm inline-block mb-0">BILL TO</p>
          <p className="mb-0 h-6">{companyName}</p>
          <p className="text-xs m-0 h-5">{companyAddress}</p>
          <p className="text-xs m-0 h-5">{companyZipcode} <span>{companyState.toUpperCase()}</span></p>
          <div className="grid grid-cols-4 bg-slate-700 text-white">
            <div className="col-span-3">
              <div className="px-2 py-1 text-sm">DESCRIPTION</div>
            </div>
            <div className="col-span-1">
              <div className="px-2 py-1 text-sm text-right">
                AMOUNT
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 bg-gray-200">
              <div className="col-span-3">
              <div className="px-2 py-1 text-sm">{format(date, 'LLLL')} Consultancy Services</div>
            </div>
            <div className="col-span-1">
                <div className="px-2 py-1 text-sm text-right">{(Number(consultancyPrice) || Number(exchangeRate)) ? Math.ceil(parseFloat(consultancyPrice) / parseFloat(exchangeRate)).toFixed(2) : null}</div>
            </div>
          </div>
          <div className="grid grid-cols-4 bg-gray-100">
              <div className="col-span-3">
                <div className="px-2 py-1 text-sm">Bank Charges</div>
              </div>
              <div className="col-span-1">
                <div className="px-2 py-1 text-sm text-right">{Number(bankCharge).toFixed(2)}</div>
              </div>
          </div>
          <p className="text-xs">Exchange Rate: {Number(exchangeRate).toFixed(2)} TRY/USD</p>
            <p className="text-xs">{Number(consultancyPrice) / Number(exchangeRate) > 1 ? Math.round(Number(consultancyPrice) / Number(exchangeRate)).toFixed(2) : null} USD ({consultancyPrice} / {Number(exchangeRate).toFixed(2)})</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Invoice;