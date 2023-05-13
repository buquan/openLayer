// import { fromLonLat } from 'ol/proj'
import './index.less'

import { Tile as TileLayer } from 'ol/layer'
import Map from 'ol/Map'
import { OSM } from 'ol/source'
import View from 'ol/View'
import { FC, useEffect, useRef } from 'react'

const OpenLayer: FC = () => {
  const olMapRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    // 使用内置的OSM
    // const tileLayer = new TileLayer({
    //   source: new OSM(),
    // })
    // 使用高德
    // const tileLayer = new TileLayer({
    //   source: new XYZ({
    //       url: 'https://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}'
    //   })
    // })
    // let map = new Map({
    //   layers: [tileLayer],
    //   view: new View({
    //     center: fromLonLat([120.771441, 30.756433]), //地图中心点
    //     zoom: 15, // 缩放级别
    //     minZoom: 0, // 最小缩放级别
    //     maxZoom: 18, // 最大缩放级别
    //     constrainResolution: true, // 因为存在非整数的缩放级别，所以设置该参数为true来让每次缩放结束后自动缩放到距离最近的一个整数级别，这个必须要设置，当缩放在非整数级别时地图会糊
    //   }),
    //   target: olMapRef.current!, // DOM容器
    // })

    new Map({
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      target: olMapRef.current!,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [103.823557, 36.058039],
        zoom: 2,
      }),
    })
  }, [])
  return <div className="ol-map" ref={olMapRef}></div>
}

export default OpenLayer
