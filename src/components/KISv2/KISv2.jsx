import { useNavigate } from 'react-router-dom'

import './KISv2.scss'


export const KISv2 = (props) => {

    return (
        <div className={'KISv2 ' + props.dataStatus.className}> 
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
                
            >
                <g>
                    <polygon
                        style={{
                            fill: "none",
                        }}
                        points="275.211,140.527 360.241,140.527 380.083,120.685 275.211,120.685  "
                    />
                    <polygon
                        style={{
                            fill: "none",
                        }}
                        points="232.234,268.534 219.714,281.054 232.234,281.054  "
                    />
                    <g>
                        <g>
                            <rect
                                x={232.254}
                                y={69.157}
                                style={{
                                    fill: "#718176",
                                }}
                                width={42.982}
                                height={377.465}
                            />
                            <polygon
                                style={{
                                    fill: "#718176",
                                }}
                                points="56.146,446.588 76.861,489.564 232.234,489.564 232.234,446.588  "
                            />
                            <polygon
                                style={{
                                    fill: "#718176",
                                }}
                                points="275.21,446.588 275.21,489.564 435.111,489.564 455.826,446.588  "
                            />
                            <rect
                                x={232.234}
                                y={446.588}
                                style={{
                                    fill: "#979696",
                                }}
                                width={42.977}
                                height={42.977}
                            />
                            <path
                                style={{
                                    fill: "#718176",
                                }}
                                d="M511.972,7.837v105.05c0,4.315-3.485,7.8-7.8,7.8H7.8c-4.315,0-7.8-3.485-7.8-7.8V7.837 c0-4.315,3.485-7.799,7.8-7.799h496.372C508.487,0.037,511.972,3.522,511.972,7.837z"
                            />
                            <path
                                style={{
                                    fill: "#718176",
                                }}
                                d="M511.972,148.318v105.05c0,4.315-3.485,7.883-7.8,7.883H7.8c-4.315,0-7.8-3.568-7.8-7.883v-105.05 c0-4.315,3.485-7.8,7.8-7.8h496.372C508.487,140.518,511.972,144.003,511.972,148.318z"
                            />
                            <path
                                style={{
                                    fill: "#718176",
                                }}
                                d="M511.972,288.882v105.05c0,4.315-3.485,7.799-7.8,7.799H7.8c-4.315,0-7.8-3.484-7.8-7.799v-105.05 c0-4.314,3.485-7.799,7.8-7.799h496.372C508.487,281.082,511.972,284.568,511.972,288.882z"
                            />
                            <path
                                style={{
                                    fill: "#FFFFFF",
                                }}
                                d="M492.427,6.264H19.545c-7.351,0-13.31,5.959-13.31,13.31v81.539 c0,7.351,5.959,13.309,13.31,13.309h472.882c7.351,0,13.31-5.959,13.31-13.309V19.573 C505.737,12.222,499.778,6.264,492.427,6.264z"
                            />
                            <path
                                style={{
                                    fill: "#FFFFFF",
                                }}
                                d="M492.427,146.79H19.545c-7.351,0-13.31,5.959-13.31,13.31v81.539c0,7.351,5.959,13.31,13.31,13.31 h472.882c7.351,0,13.31-5.959,13.31-13.31V160.1C505.737,152.749,499.778,146.79,492.427,146.79z"
                            />
                            <path
                                style={{
                                    fill: "#FFFFFF",
                                }}
                                d="M492.427,287.318H19.545c-7.351,0-13.31,5.959-13.31,13.31v81.539 c0,7.351,5.959,13.31,13.31,13.31h472.882c7.351,0,13.31-5.959,13.31-13.31v-81.539 C505.737,293.276,499.778,287.318,492.427,287.318z"
                            />
                            <g>
                                <g>
                                    <path
                                        style={{
                                            fill: "#718176",
                                        }}
                                        d="M57.355,26.558H43.829c-1.169,0-2.116,0.947-2.116,2.116v13.548 c0,1.169,0.948,2.116,2.116,2.116h13.526c1.169,0,2.116-0.948,2.116-2.116V28.674C59.471,27.505,58.524,26.558,57.355,26.558z"
                                    />
                                    <path
                                        style={{
                                            fill: "#718176",
                                        }}
                                        d="M57.355,52.308H43.829c-1.169,0-2.116,0.947-2.116,2.116v13.548 c0,1.169,0.948,2.116,2.116,2.116h13.526c1.169,0,2.116-0.948,2.116-2.116V54.424C59.471,53.256,58.524,52.308,57.355,52.308z"
                                    />
                                    <path
                                        style={{
                                            fill: "#718176",
                                        }}
                                        d="M57.355,78.059H43.829c-1.169,0-2.116,0.948-2.116,2.116v13.548 c0,1.169,0.948,2.116,2.116,2.116h13.526c1.169,0,2.116-0.948,2.116-2.116V80.175C59.471,79.006,58.524,78.059,57.355,78.059z"
                                    />
                                </g>
                                <g>
                                    <path
                                        style={{
                                            fill: "#718176",
                                        }}
                                        d="M89.021,26.558H75.495c-1.169,0-2.116,0.947-2.116,2.116v13.548 c0,1.169,0.948,2.116,2.116,2.116h13.526c1.169,0,2.116-0.948,2.116-2.116V28.674C91.137,27.505,90.19,26.558,89.021,26.558z"
                                    />
                                    <path
                                        style={{
                                            fill: "#718176",
                                        }}
                                        d="M89.021,52.308H75.495c-1.169,0-2.116,0.947-2.116,2.116v13.548 c0,1.169,0.948,2.116,2.116,2.116h13.526c1.169,0,2.116-0.948,2.116-2.116V54.424C91.137,53.256,90.19,52.308,89.021,52.308z"
                                    />
                                    <path
                                        style={{
                                            fill: "#718176",
                                        }}
                                        d="M89.021,78.059H75.495c-1.169,0-2.116,0.948-2.116,2.116v13.548 c0,1.169,0.948,2.116,2.116,2.116h13.526c1.169,0,2.116-0.948,2.116-2.116V80.175C91.137,79.006,90.19,78.059,89.021,78.059z"
                                    />
                                </g>
                                <g>
                                    <path
                                        style={{
                                            fill: "#718176",
                                        }}
                                        d="M120.687,26.558h-13.525c-1.169,0-2.116,0.947-2.116,2.116v13.548 c0,1.169,0.948,2.116,2.116,2.116h13.525c1.169,0,2.116-0.948,2.116-2.116V28.674 C122.804,27.505,121.856,26.558,120.687,26.558z"
                                    />
                                    <path
                                        style={{
                                            fill: "#718176",
                                        }}
                                        d="M120.687,52.308h-13.525c-1.169,0-2.116,0.947-2.116,2.116v13.548 c0,1.169,0.948,2.116,2.116,2.116h13.525c1.169,0,2.116-0.948,2.116-2.116V54.424 C122.804,53.256,121.856,52.308,120.687,52.308z"
                                    />
                                    <path
                                        style={{
                                            fill: "#718176",
                                        }}
                                        d="M120.687,78.059h-13.525c-1.169,0-2.116,0.948-2.116,2.116v13.548 c0,1.169,0.948,2.116,2.116,2.116h13.525c1.169,0,2.116-0.948,2.116-2.116V80.175 C122.804,79.006,121.856,78.059,120.687,78.059z"
                                    />
                                </g>
                                <g>
                                    <path
                                        style={{
                                            fill: "#718176",
                                        }}
                                        d="M152.354,26.558h-13.526c-1.169,0-2.116,0.947-2.116,2.116v13.548 c0,1.169,0.947,2.116,2.116,2.116h13.526c1.169,0,2.116-0.948,2.116-2.116V28.674C154.47,27.505,153.522,26.558,152.354,26.558 z"
                                    />
                                    <path
                                        style={{
                                            fill: "#718176",
                                        }}
                                        d="M152.354,52.308h-13.526c-1.169,0-2.116,0.947-2.116,2.116v13.548 c0,1.169,0.947,2.116,2.116,2.116h13.526c1.169,0,2.116-0.948,2.116-2.116V54.424C154.47,53.256,153.522,52.308,152.354,52.308 z"
                                    />
                                    <path
                                        style={{
                                            fill: "#718176",
                                        }}
                                        d="M152.354,78.059h-13.526c-1.169,0-2.116,0.948-2.116,2.116v13.548 c0,1.169,0.947,2.116,2.116,2.116h13.526c1.169,0,2.116-0.948,2.116-2.116V80.175C154.47,79.006,153.522,78.059,152.354,78.059 z"
                                    />
                                </g>
                                <g>
                                    <path
                                        style={{
                                            fill: "#718176",
                                        }}
                                        d="M184.02,26.558h-13.526c-1.169,0-2.116,0.947-2.116,2.116v13.548 c0,1.169,0.947,2.116,2.116,2.116h13.526c1.169,0,2.116-0.948,2.116-2.116V28.674C186.136,27.505,185.188,26.558,184.02,26.558 z"
                                    />
                                    <path
                                        style={{
                                            fill: "#718176",
                                        }}
                                        d="M184.02,52.308h-13.526c-1.169,0-2.116,0.947-2.116,2.116v13.548 c0,1.169,0.947,2.116,2.116,2.116h13.526c1.169,0,2.116-0.948,2.116-2.116V54.424C186.136,53.256,185.188,52.308,184.02,52.308 z"
                                    />
                                    <path
                                        style={{
                                            fill: "#718176",
                                        }}
                                        d="M184.02,78.059h-13.526c-1.169,0-2.116,0.948-2.116,2.116v13.548 c0,1.169,0.947,2.116,2.116,2.116h13.526c1.169,0,2.116-0.948,2.116-2.116V80.175C186.136,79.006,185.188,78.059,184.02,78.059 z"
                                    />
                                </g>
                            </g>
                            <rect
                                x={225.104}
                                y={49.742}
                                style={{
                                    fill: "#979696",
                                }}
                                width={100.213}
                                height={21.202}
                            />
                            <circle
                                className='svg-kis-green'
                                cx={369.338}
                                cy={61.198}
                                r={19.487}
                            />
                            <circle
                                className='svg-kis-red'
                                cx={416.663}
                                cy={61.198}
                                r={19.487}
                            />
                            <circle
                                className='svg-kis-yellow'
                                cx={463.989}
                                cy={61.198}
                                r={19.487}
                            />
                            <g>
                                <g>
                                    <path
                                        style={{
                                            fill: "#718176",
                                        }}
                                        d="M57.355,167.084H43.829c-1.169,0-2.116,0.948-2.116,2.116v13.548 c0,1.169,0.948,2.116,2.116,2.116h13.526c1.169,0,2.116-0.948,2.116-2.116v-13.548 C59.471,168.032,58.524,167.084,57.355,167.084z"
                                    />
                                    <path
                                        style={{
                                            fill: "#718176",
                                        }}
                                        d="M57.355,192.835H43.829c-1.169,0-2.116,0.947-2.116,2.116v13.548 c0,1.169,0.948,2.116,2.116,2.116h13.526c1.169,0,2.116-0.948,2.116-2.116v-13.548 C59.471,193.783,58.524,192.835,57.355,192.835z"
                                    />
                                    <path
                                        style={{
                                            fill: "#718176",
                                        }}
                                        d="M57.355,218.585H43.829c-1.169,0-2.116,0.948-2.116,2.116v13.548 c0,1.169,0.948,2.116,2.116,2.116h13.526c1.169,0,2.116-0.948,2.116-2.116v-13.548 C59.471,219.533,58.524,218.585,57.355,218.585z"
                                    />
                                </g>
                                <g>
                                    <path
                                        style={{
                                            fill: "#718176",
                                        }}
                                        d="M89.021,167.084H75.495c-1.169,0-2.116,0.948-2.116,2.116v13.548 c0,1.169,0.948,2.116,2.116,2.116h13.526c1.169,0,2.116-0.948,2.116-2.116v-13.548 C91.137,168.032,90.19,167.084,89.021,167.084z"
                                    />
                                    <path
                                        style={{
                                            fill: "#718176",
                                        }}
                                        d="M89.021,192.835H75.495c-1.169,0-2.116,0.947-2.116,2.116v13.548 c0,1.169,0.948,2.116,2.116,2.116h13.526c1.169,0,2.116-0.948,2.116-2.116v-13.548 C91.137,193.783,90.19,192.835,89.021,192.835z"
                                    />
                                    <path
                                        style={{
                                            fill: "#718176",
                                        }}
                                        d="M89.021,218.585H75.495c-1.169,0-2.116,0.948-2.116,2.116v13.548 c0,1.169,0.948,2.116,2.116,2.116h13.526c1.169,0,2.116-0.948,2.116-2.116v-13.548 C91.137,219.533,90.19,218.585,89.021,218.585z"
                                    />
                                </g>
                                <g>
                                    <path
                                        style={{
                                            fill: "#718176",
                                        }}
                                        d="M120.687,167.084h-13.525c-1.169,0-2.116,0.948-2.116,2.116v13.548 c0,1.169,0.948,2.116,2.116,2.116h13.525c1.169,0,2.116-0.948,2.116-2.116v-13.548 C122.804,168.032,121.856,167.084,120.687,167.084z"
                                    />
                                    <path
                                        style={{
                                            fill: "#718176",
                                        }}
                                        d="M120.687,192.835h-13.525c-1.169,0-2.116,0.947-2.116,2.116v13.548 c0,1.169,0.948,2.116,2.116,2.116h13.525c1.169,0,2.116-0.948,2.116-2.116v-13.548 C122.804,193.783,121.856,192.835,120.687,192.835z"
                                    />
                                    <path
                                        style={{
                                            fill: "#718176",
                                        }}
                                        d="M120.687,218.585h-13.525c-1.169,0-2.116,0.948-2.116,2.116v13.548 c0,1.169,0.948,2.116,2.116,2.116h13.525c1.169,0,2.116-0.948,2.116-2.116v-13.548 C122.804,219.533,121.856,218.585,120.687,218.585z"
                                    />
                                </g>
                                <g>
                                    <path
                                        style={{
                                            fill: "#718176",
                                        }}
                                        d="M152.354,167.084h-13.526c-1.169,0-2.116,0.948-2.116,2.116v13.548 c0,1.169,0.947,2.116,2.116,2.116h13.526c1.169,0,2.116-0.948,2.116-2.116v-13.548 C154.47,168.032,153.522,167.084,152.354,167.084z"
                                    />
                                    <path
                                        style={{
                                            fill: "#718176",
                                        }}
                                        d="M152.354,192.835h-13.526c-1.169,0-2.116,0.947-2.116,2.116v13.548 c0,1.169,0.947,2.116,2.116,2.116h13.526c1.169,0,2.116-0.948,2.116-2.116v-13.548 C154.47,193.783,153.522,192.835,152.354,192.835z"
                                    />
                                    <path
                                        style={{
                                            fill: "#718176",
                                        }}
                                        d="M152.354,218.585h-13.526c-1.169,0-2.116,0.948-2.116,2.116v13.548 c0,1.169,0.947,2.116,2.116,2.116h13.526c1.169,0,2.116-0.948,2.116-2.116v-13.548 C154.47,219.533,153.522,218.585,152.354,218.585z"
                                    />
                                </g>
                                <g>
                                    <path
                                        style={{
                                            fill: "#718176",
                                        }}
                                        d="M184.02,167.084h-13.526c-1.169,0-2.116,0.948-2.116,2.116v13.548 c0,1.169,0.947,2.116,2.116,2.116h13.526c1.169,0,2.116-0.948,2.116-2.116v-13.548 C186.136,168.032,185.188,167.084,184.02,167.084z"
                                    />
                                    <path
                                        style={{
                                            fill: "#718176",
                                        }}
                                        d="M184.02,192.835h-13.526c-1.169,0-2.116,0.947-2.116,2.116v13.548 c0,1.169,0.947,2.116,2.116,2.116h13.526c1.169,0,2.116-0.948,2.116-2.116v-13.548 C186.136,193.783,185.188,192.835,184.02,192.835z"
                                    />
                                    <path
                                        style={{
                                            fill: "#718176",
                                        }}
                                        d="M184.02,218.585h-13.526c-1.169,0-2.116,0.948-2.116,2.116v13.548 c0,1.169,0.947,2.116,2.116,2.116h13.526c1.169,0,2.116-0.948,2.116-2.116v-13.548 C186.136,219.533,185.188,218.585,184.02,218.585z"
                                    />
                                </g>
                            </g>
                            <rect
                                x={225.104}
                                y={190.269}
                                style={{
                                    fill: "#979696",
                                }}
                                width={100.213}
                                height={21.202}
                            />
                            <circle
                                className='svg-kis-yellow'
                                cx={369.338}
                                cy={201.725}
                                r={19.487}
                            />
                            <circle
                                className='svg-kis-green'
                                cx={416.663}
                                cy={201.725}
                                r={19.487}
                            />
                            <circle
                                className='svg-kis-red'
                                cx={463.989}
                                cy={201.725}
                                r={19.487}
                            />
                            <g>
                                <g>
                                    <path
                                        style={{
                                            fill: "#718176",
                                        }}
                                        d="M57.355,307.611H43.829c-1.169,0-2.116,0.948-2.116,2.116v13.548 c0,1.169,0.948,2.116,2.116,2.116h13.526c1.169,0,2.116-0.948,2.116-2.116v-13.548 C59.471,308.559,58.524,307.611,57.355,307.611z"
                                    />
                                    <path
                                        style={{
                                            fill: "#718176",
                                        }}
                                        d="M57.355,333.362H43.829c-1.169,0-2.116,0.947-2.116,2.116v13.548 c0,1.169,0.948,2.116,2.116,2.116h13.526c1.169,0,2.116-0.947,2.116-2.116v-13.548 C59.471,334.309,58.524,333.362,57.355,333.362z"
                                    />
                                    <path
                                        style={{
                                            fill: "#718176",
                                        }}
                                        d="M57.355,359.112H43.829c-1.169,0-2.116,0.948-2.116,2.116v13.548 c0,1.169,0.948,2.116,2.116,2.116h13.526c1.169,0,2.116-0.948,2.116-2.116v-13.548 C59.471,360.06,58.524,359.112,57.355,359.112z"
                                    />
                                </g>
                                <g>
                                    <path
                                        style={{
                                            fill: "#718176",
                                        }}
                                        d="M89.021,307.611H75.495c-1.169,0-2.116,0.948-2.116,2.116v13.548 c0,1.169,0.948,2.116,2.116,2.116h13.526c1.169,0,2.116-0.948,2.116-2.116v-13.548 C91.137,308.559,90.19,307.611,89.021,307.611z"
                                    />
                                    <path
                                        style={{
                                            fill: "#718176",
                                        }}
                                        d="M89.021,333.362H75.495c-1.169,0-2.116,0.947-2.116,2.116v13.548 c0,1.169,0.948,2.116,2.116,2.116h13.526c1.169,0,2.116-0.947,2.116-2.116v-13.548 C91.137,334.309,90.19,333.362,89.021,333.362z"
                                    />
                                    <path
                                        style={{
                                            fill: "#718176",
                                        }}
                                        d="M89.021,359.112H75.495c-1.169,0-2.116,0.948-2.116,2.116v13.548 c0,1.169,0.948,2.116,2.116,2.116h13.526c1.169,0,2.116-0.948,2.116-2.116v-13.548C91.137,360.06,90.19,359.112,89.021,359.112 z"
                                    />
                                </g>
                                <g>
                                    <path
                                        style={{
                                            fill: "#718176",
                                        }}
                                        d="M120.687,307.611h-13.525c-1.169,0-2.116,0.948-2.116,2.116v13.548 c0,1.169,0.948,2.116,2.116,2.116h13.525c1.169,0,2.116-0.948,2.116-2.116v-13.548 C122.804,308.559,121.856,307.611,120.687,307.611z"
                                    />
                                    <path
                                        style={{
                                            fill: "#718176",
                                        }}
                                        d="M120.687,333.362h-13.525c-1.169,0-2.116,0.947-2.116,2.116v13.548 c0,1.169,0.948,2.116,2.116,2.116h13.525c1.169,0,2.116-0.947,2.116-2.116v-13.548 C122.804,334.309,121.856,333.362,120.687,333.362z"
                                    />
                                    <path
                                        style={{
                                            fill: "#718176",
                                        }}
                                        d="M120.687,359.112h-13.525c-1.169,0-2.116,0.948-2.116,2.116v13.548 c0,1.169,0.948,2.116,2.116,2.116h13.525c1.169,0,2.116-0.948,2.116-2.116v-13.548 C122.804,360.06,121.856,359.112,120.687,359.112z"
                                    />
                                </g>
                                <g>
                                    <path
                                        style={{
                                            fill: "#718176",
                                        }}
                                        d="M152.354,307.611h-13.526c-1.169,0-2.116,0.948-2.116,2.116v13.548 c0,1.169,0.947,2.116,2.116,2.116h13.526c1.169,0,2.116-0.948,2.116-2.116v-13.548 C154.47,308.559,153.522,307.611,152.354,307.611z"
                                    />
                                    <path
                                        style={{
                                            fill: "#718176",
                                        }}
                                        d="M152.354,333.362h-13.526c-1.169,0-2.116,0.947-2.116,2.116v13.548 c0,1.169,0.947,2.116,2.116,2.116h13.526c1.169,0,2.116-0.947,2.116-2.116v-13.548 C154.47,334.309,153.522,333.362,152.354,333.362z"
                                    />
                                    <path
                                        style={{
                                            fill: "#718176",
                                        }}
                                        d="M152.354,359.112h-13.526c-1.169,0-2.116,0.948-2.116,2.116v13.548 c0,1.169,0.947,2.116,2.116,2.116h13.526c1.169,0,2.116-0.948,2.116-2.116v-13.548 C154.47,360.06,153.522,359.112,152.354,359.112z"
                                    />
                                </g>
                                <g>
                                    <path
                                        style={{
                                            fill: "#718176",
                                        }}
                                        d="M184.02,307.611h-13.526c-1.169,0-2.116,0.948-2.116,2.116v13.548 c0,1.169,0.947,2.116,2.116,2.116h13.526c1.169,0,2.116-0.948,2.116-2.116v-13.548 C186.136,308.559,185.188,307.611,184.02,307.611z"
                                    />
                                    <path
                                        style={{
                                            fill: "#718176",
                                        }}
                                        d="M184.02,333.362h-13.526c-1.169,0-2.116,0.947-2.116,2.116v13.548 c0,1.169,0.947,2.116,2.116,2.116h13.526c1.169,0,2.116-0.947,2.116-2.116v-13.548 C186.136,334.309,185.188,333.362,184.02,333.362z"
                                    />
                                    <path
                                        style={{
                                            fill: "#718176",
                                        }}
                                        d="M184.02,359.112h-13.526c-1.169,0-2.116,0.948-2.116,2.116v13.548 c0,1.169,0.947,2.116,2.116,2.116h13.526c1.169,0,2.116-0.948,2.116-2.116v-13.548 C186.136,360.06,185.188,359.112,184.02,359.112z"
                                    />
                                </g>
                            </g>
                            <rect
                                x={225.104}
                                y={330.796}
                                style={{
                                    fill: "#979696",
                                }}
                                width={100.213}
                                height={21.202}
                            />
                            <circle
                                className='svg-kis-red'
                                cx={369.338}
                                cy={342.252}
                                r={19.487}
                            />
                            <circle
                                className='svg-kis-yellow'
                                cx={416.663}
                                cy={342.252}
                                r={19.487}
                            />
                            <circle
                                className='svg-kis-green'
                                cx={463.989}
                                cy={342.252}
                                r={19.487}
                            />
                        </g>
                        <g
                            style={{
                                opacity: 0.5,
                            }}
                        >
                            <path
                                style={{
                                    opacity: 0.07,
                                    fill: "#040000",
                                }}
                                d="M275.236,261.251v19.832h228.935c4.315,0,7.8,3.486,7.8,7.799v105.05 c0,4.315-3.485,7.799-7.8,7.799H275.236v44.891h180.559l-20.661,42.983H76.837L56.425,447.12l-0.249-0.497h176.078v-44.891 H98.992l55.512-55.512l20.91-20.827l44.31-44.31h12.53v-12.53l57.089-57.089l21.077-21.16l43.48-43.48l4.647-4.647l1.66-1.659 h143.966c4.315,0,7.8,3.485,7.8,7.8v105.05c0,4.315-3.485,7.883-7.8,7.883H275.236z"
                            />
                            <path
                                style={{
                                    opacity: 0.07,
                                    fill: "#040000",
                                }}
                                d="M504.171,0h-3.403L380.083,120.685h124.088c4.324,0,7.829-3.505,7.829-7.828V7.829 C512,3.506,508.495,0,504.171,0z"
                            />
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    )
}