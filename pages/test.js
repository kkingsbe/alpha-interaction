import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useEffect, useState} from "react"
import { ResponsiveContainer, AreaChart, Area, LineChart, Line, XAxis, YAxis } from 'recharts'

var context = {}

export default function Home() {
  const [port, setPort] = useState()
  const [data, setData] = useState([])
  const [accData, setAccData] = useState([])

  var sampleAcc = [
    [
        "6826",
        "25.11"
    ],
    [
        "6881",
        "26.48"
    ],
    [
        "6936",
        "9.01"
    ],
    [
        "6991",
        "-1.49"
    ],
    [
        "7046",
        "-8.44"
    ],
    [
        "7100",
        "1.42"
    ],
    [
        "7155",
        "5.03"
    ],
    [
        "7210",
        "6.77"
    ],
    [
        "7265",
        "8.42"
    ],
    [
        "7319",
        "9.04"
    ],
    [
        "7374",
        "8.76"
    ],
    [
        "7429",
        "9.04"
    ],
    [
        "7484",
        "8.50"
    ],
    [
        "7538",
        "8.00"
    ],
    [
        "7593",
        "10.49"
    ],
    [
        "7648",
        "12.82"
    ],
    [
        "7703",
        "11.44"
    ],
    [
        "7757",
        "10.95"
    ],
    [
        "7812",
        "10.57"
    ],
    [
        "7867",
        "9.88"
    ],
    [
        "7921",
        "9.33"
    ],
    [
        "7976",
        "9.12"
    ],
    [
        "8031",
        "9.12"
    ],
    [
        "8086",
        "9.06"
    ],
    [
        "8140",
        "9.19"
    ],
    [
        "8195",
        "9.24"
    ],
    [
        "8250",
        "9.37"
    ],
    [
        "8305",
        "9.34"
    ],
    [
        "8359",
        "9.24"
    ],
    [
        "8414",
        "8.79"
    ],
    [
        "8469",
        "8.74"
    ],
    [
        "8524",
        "8.24"
    ],
    [
        "8578",
        "9.22"
    ],
    [
        "8633",
        "8.35"
    ],
    [
        "8688",
        "8.66"
    ],
    [
        "8743",
        "8.76"
    ],
    [
        "8797",
        "8.63"
    ],
    [
        "8852",
        "8.51"
    ],
    [
        "8907",
        "7.84"
    ],
    [
        "8962",
        "7.79"
    ],
    [
        "9016",
        "8.36"
    ],
    [
        "9071",
        "10.05"
    ],
    [
        "9126",
        "5.50"
    ],
    [
        "9181",
        "6.05"
    ],
    [
        "9236",
        "5.19"
    ],
    [
        "9290",
        "4.57"
    ],
    [
        "9345",
        "4.14"
    ],
    [
        "9400",
        "5.37"
    ],
    [
        "9455",
        "8.12"
    ],
    [
        "9510",
        "8.35"
    ],
    [
        "9564",
        "7.10"
    ],
    [
        "9619",
        "8.20"
    ],
    [
        "9674",
        "8.06"
    ],
    [
        "9729",
        "8.19"
    ],
    [
        "9783",
        "7.84"
    ],
    [
        "9838",
        "5.34"
    ],
    [
        "9893",
        "6.07"
    ],
    [
        "9948",
        "1.81"
    ],
    [
        "10003",
        "-2.62"
    ],
    [
        "10057",
        "-2.78"
    ],
    [
        "10112",
        "0.01"
    ],
    [
        "10167",
        "1.41"
    ],
    [
        "10222",
        "2.51"
    ],
    [
        "10276",
        "1.80"
    ],
    [
        "10331",
        "2.66"
    ],
    [
        "10386",
        "1.99"
    ],
    [
        "10441",
        "-1.20"
    ],
    [
        "10495",
        "6.10"
    ],
    [
        "10550",
        "1.87"
    ],
    [
        "10605",
        "0.44"
    ],
    [
        "10660",
        "-1.81"
    ],
    [
        "10714",
        "-2.87"
    ],
    [
        "10769",
        "-3.63"
    ],
    [
        "10824",
        "-10.90"
    ],
    [
        "10879",
        "-2.92"
    ],
    [
        "10933",
        "-14.62"
    ],
    [
        "10988",
        "-19.26"
    ],
    [
        "11043",
        "-6.12"
    ],
    [
        "11098",
        "-2.32"
    ],
    [
        "11152",
        "-1.11"
    ],
    [
        "11207",
        "0.58"
    ],
    [
        "11262",
        "-0.47"
    ],
    [
        "11317",
        "-0.68"
    ],
    [
        "11371",
        "1.32"
    ],
    [
        "11426",
        "-2.25"
    ],
    [
        "11481",
        "0.53"
    ],
    [
        "11536",
        "-1.75"
    ],
    [
        "11590",
        "-1.81"
    ],
    [
        "11645",
        "-4.23"
    ],
    [
        "11700",
        "0.35"
    ],
    [
        "11755",
        "-1.94"
    ],
    [
        "11809",
        "-0.44"
    ],
    [
        "11864",
        "-1.27"
    ],
    [
        "11919",
        "-0.59"
    ],
    [
        "11974",
        "-0.85"
    ],
    [
        "12028",
        "-1.08"
    ],
    [
        "12083",
        "-0.06"
    ],
    [
        "12138",
        "-0.75"
    ],
    [
        "12193",
        "-1.20"
    ],
    [
        "12248",
        "-0.75"
    ],
    [
        "12302",
        "-0.72"
    ],
    [
        "12357",
        "-0.09"
    ],
    [
        "12412",
        "-0.68"
    ],
    [
        "12467",
        "-0.73"
    ],
    [
        "12521",
        "-0.73"
    ],
    [
        "12576",
        "-0.75"
    ],
    [
        "12631",
        "-0.70"
    ],
    [
        "12686",
        "-0.75"
    ],
    [
        "12740",
        "-0.59"
    ],
    [
        "12795",
        "-0.83"
    ],
    [
        "12850",
        "-0.71"
    ],
    [
        "12905",
        "-0.75"
    ],
    [
        "12960",
        "-0.67"
    ],
    [
        "13014",
        "-0.62"
    ],
    [
        "13069",
        "-0.70"
    ],
    [
        "13124",
        "-0.62"
    ],
    [
        "13179",
        "-0.70"
    ],
    [
        "13233",
        "-0.65"
    ],
    [
        "13288",
        "-1.20"
    ],
    [
        "13343",
        "-0.68"
    ],
    [
        "13398",
        "-0.77"
    ],
    [
        "13452",
        "-0.65"
    ],
    [
        "13507",
        "-0.73"
    ],
    [
        "13562",
        "-0.70"
    ],
    [
        "13617",
        "-0.75"
    ],
    [
        "13671",
        "-0.70"
    ],
    [
        "13726",
        "-0.73"
    ],
    [
        "13781",
        "-0.71"
    ],
    [
        "13836",
        "-0.71"
    ],
    [
        "13890",
        "-0.73"
    ],
    [
        "13945",
        "-0.84"
    ],
    [
        "14000",
        "-0.74"
    ],
    [
        "14055",
        "-0.72"
    ],
    [
        "14109",
        "-0.70"
    ],
    [
        "14164",
        "-0.67"
    ],
    [
        "14219",
        "-0.73"
    ],
    [
        "14273",
        "-0.79"
    ],
    [
        "14328",
        "-0.65"
    ],
    [
        "14383",
        "-0.65"
    ],
    [
        "14438",
        "-0.70"
    ],
    [
        "14492",
        "-1.19"
    ],
    [
        "14547",
        "-0.72"
    ],
    [
        "14602",
        "-0.72"
    ],
    [
        "14657",
        "-0.67"
    ],
    [
        "14711",
        "-0.71"
    ],
    [
        "14766",
        "-0.74"
    ],
    [
        "14821",
        "-0.70"
    ],
    [
        "14876",
        "-0.71"
    ],
    [
        "14930",
        "-0.70"
    ],
    [
        "14985",
        "-1.14"
    ],
    [
        "15040",
        "-0.70"
    ],
    [
        "15095",
        "-0.67"
    ],
    [
        "15149",
        "-0.66"
    ],
    [
        "15204",
        "-0.68"
    ],
    [
        "15259",
        "-0.63"
    ],
    [
        "15314",
        "-0.72"
    ],
    [
        "15368",
        "-0.78"
    ],
    [
        "15423",
        "-0.71"
    ],
    [
        "15478",
        "-0.77"
    ],
    [
        "15533",
        "-0.65"
    ],
    [
        "15588",
        "-0.65"
    ],
    [
        "15642",
        "-0.72"
    ],
    [
        "15697",
        "-0.67"
    ],
    [
        "15752",
        "-0.71"
    ],
    [
        "15807",
        "-0.71"
    ],
    [
        "15861",
        "-0.67"
    ],
    [
        "15916",
        "-0.63"
    ],
    [
        "15971",
        "-0.67"
    ],
    [
        "16026",
        "-0.70"
    ],
    [
        "16080",
        "-0.71"
    ],
    [
        "16135",
        "-0.70"
    ],
    [
        "16190",
        "-0.70"
    ],
    [
        "16245",
        "-0.63"
    ],
    [
        "16299",
        "-0.70"
    ],
    [
        "16354",
        "-0.68"
    ],
    [
        "16409",
        "-0.62"
    ],
    [
        "16464",
        "-0.63"
    ],
    [
        "16519",
        "-0.77"
    ],
    [
        "16573",
        "-0.67"
    ],
    [
        "16628",
        "-0.70"
    ],
    [
        "16683",
        "-0.73"
    ],
    [
        "16737",
        "-0.67"
    ],
    [
        "16792",
        "-0.65"
    ],
    [
        "16847",
        "-0.72"
    ],
    [
        "16902",
        "-0.72"
    ],
    [
        "16956",
        "-0.62"
    ],
    [
        "17011",
        "-0.68"
    ],
    [
        "17066",
        "-0.82"
    ],
    [
        "17121",
        "-0.78"
    ],
    [
        "17175",
        "-0.68"
    ],
    [
        "17230",
        "-0.71"
    ],
    [
        "17285",
        "-0.78"
    ],
    [
        "17340",
        "-0.03"
    ],
    [
        "17394",
        "-0.80"
    ],
    [
        "17449",
        "-0.08"
    ],
    [
        "17504",
        "-1.22"
    ],
    [
        "17558",
        "-0.58"
    ],
    [
        "17613",
        "-0.78"
    ],
    [
        "17668",
        "-0.65"
    ],
    [
        "17723",
        "-0.66"
    ],
    [
        "17777",
        "-0.62"
    ],
    [
        "17832",
        "-0.75"
    ],
    [
        "17887",
        "-0.71"
    ],
    [
        "17942",
        "-0.70"
    ],
    [
        "17996",
        "-0.61"
    ],
    [
        "18051",
        "-0.65"
    ],
    [
        "18106",
        "-0.65"
    ],
    [
        "18161",
        "-0.65"
    ],
    [
        "18216",
        "-0.67"
    ],
    [
        "18270",
        "-0.71"
    ],
    [
        "18325",
        "-1.19"
    ],
    [
        "18380",
        "-0.68"
    ],
    [
        "18435",
        "-0.72"
    ],
    [
        "18489",
        "-0.67"
    ],
    [
        "18544",
        "-0.65"
    ],
    [
        "18599",
        "-0.67"
    ],
    [
        "18654",
        "-0.72"
    ],
    [
        "18708",
        "-0.63"
    ],
    [
        "18763",
        "-0.70"
    ],
    [
        "18818",
        "-0.71"
    ],
    [
        "18873",
        "-0.63"
    ],
    [
        "18927",
        "-0.11"
    ],
    [
        "18982",
        "-0.66"
    ],
    [
        "19037",
        "-0.65"
    ],
    [
        "19092",
        "-0.70"
    ],
    [
        "19147",
        "-0.67"
    ],
    [
        "19201",
        "-0.65"
    ],
    [
        "19256",
        "-0.70"
    ],
    [
        "19311",
        "-0.52"
    ],
    [
        "19366",
        "-0.68"
    ],
    [
        "19420",
        "-0.72"
    ],
    [
        "19475",
        "-0.68"
    ],
    [
        "19530",
        "-0.70"
    ],
    [
        "19585",
        "-0.68"
    ],
    [
        "19639",
        "-0.71"
    ],
    [
        "19694",
        "-0.66"
    ],
    [
        "19749",
        "-0.74"
    ],
    [
        "19804",
        "-0.61"
    ],
    [
        "19858",
        "-0.74"
    ],
    [
        "19913",
        "-0.72"
    ],
    [
        "19968",
        "-1.22"
    ],
    [
        "20023",
        "-0.73"
    ],
    [
        "20077",
        "-0.66"
    ],
    [
        "20132",
        "-0.68"
    ],
    [
        "20187",
        "-0.70"
    ],
    [
        "20242",
        "-0.65"
    ],
    [
        "20296",
        "-0.80"
    ],
    [
        "20351",
        "-0.75"
    ]
  ]

  useEffect(() => {
    let temp = []
    sampleAcc.forEach(item => {
      temp.push({
        time: (parseInt(item[0]) / 1000).toFixed(2),
        acceleration: parseInt(item[1])
      })
    })
    console.log(temp)
    setAccData(temp)
  }, [])

  const connect = async () => {
    context = {}

    let tempPort = await navigator.serial.requestPort()
    await tempPort.open({baudRate: 115200, bufferSize: 1000000})
    setPort(tempPort)
    
    context.textEncoder = new TextEncoderStream();
    context.writableStreamClosed = context.textEncoder.readable.pipeTo(tempPort.writable);
    context.writer = context.textEncoder.writable.getWriter();
    context.textDecoder = new TextDecoderStream()
    context.readableStreamClosed = tempPort.readable.pipeTo(context.textDecoder.writable)
    context.reader = context.textDecoder.readable.getReader()
  }

  const getFlightData = async () => {
    console.log("Sending command...")
    await context.writer.write("!flightData\r\n");
    console.log("Reading response...")
    var textStream, done
    while(!done) {
      let {value, done} = await context.reader.read()
      textStream += value
      //console.log(value)
      //console.log(textStream)
      if(value.includes("!end")) break
    }
    context.reader.releaseLock()

    textStream = textStream.replace("!end", "")
    textStream = textStream.replace('\r', "")
    textStream = textStream.replace('\n', "")
    textStream = textStream.split("!flightData")[1] 

    console.log("Data:")

    let temp = []
    let tempAcc = []
    let tempG = []
    let tempAlt = []
    textStream.split("\r\n").forEach(row => {
      let rowItems = row.split(",")
      let invalid = false

      for(let datum of rowItems) {
        if(typeof(datum) == "undefined" || datum == "") invalid = true
      }

      if(!invalid) {
        temp.push({
          g: parseFloat(rowItems[0]),
          a: parseFloat(rowItems[1]),
          alt: parseFloat(rowItems[2]),
          ts: (parseFloat(rowItems[3]) / 1000).toFixed(2)
        })
      }
    })

    setData(temp)
    console.log(temp)
  }

  const close = async () => {
    context.reader.releaseLock()
    context.writer.releaseLock()
    let writableStreamClosed = context.textEncoder.readable.pipeTo(port.writable)

    context.writer.close()
    await writableStreamClosed

    await port.close()
  }

  return (
    <div className="min-w-screen min-h-screen bg-neutral">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col">
        <div className="flex flex-row">
          <button className="btn btn-primary" onClick={connect}>Connect</button>
          <button className="btn btn-primary" onClick={getFlightData}>Get Data</button>
        </div>
        
        <div className="flex flex-row gap-10 w-[80vw] h-[50vh]">
          <div className="flex flex-col w-full text-black bg-base-100 p-5 rounded-lg">
            <p className="mx-auto text-xl">Acceleration</p>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <XAxis dataKey="ts"></XAxis>
                <YAxis type="number" allowDataOverflow={false}></YAxis>
                <Area type="monotone" dataKey="a"/>
              </AreaChart> 
            </ResponsiveContainer>
          </div>

          <div className="flex flex-col w-full text-black bg-base-100 p-5 rounded-lg">
            <p className="mx-auto text-xl">Roll Rate</p>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <XAxis dataKey="ts"></XAxis>
                <YAxis type="number" allowDataOverflow={false}></YAxis>
                <Area type="monotone" dataKey="g"/>
              </AreaChart> 
            </ResponsiveContainer>
          </div>

          <div className="flex flex-col w-full text-black bg-base-100 p-5 rounded-lg">
            <p className="mx-auto text-xl">Altitude</p>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <XAxis dataKey="ts"></XAxis>
                <YAxis type="number" allowDataOverflow={false}></YAxis>
                <Line type="monotone" dataKey="alt" dot={false}/>
              </LineChart> 
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  )
}
