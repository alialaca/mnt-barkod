// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

var app = new Vue({
    el: '#app',
    data: {
        products: [
            {
                size: 3,
                count: 1000,
                hover: false,
                children: [
                    {
                        sku: 'MNT030',
                        barcode: '0080302131862',
                        label: '30',
                        nail: false
                    }
                ]
            },
            {
                size: 4,
                count: 1000,
                hover: false,
                children: [
                    {
                        sku: 'MNT040',
                        barcode: '0080302066867',
                        label: '40',
                        nail: false
                    },
                    {
                        sku: 'MNT041',
                        barcode: '0080302066867',
                        label: '41',
                        nail: true
                    }
                ]
            },
            {
                size: 5,
                count: 1000,
                hover: false,
                children: [
                    {
                        sku: 'MNT050',
                        barcode: '0080302055281',
                        label: '50',
                        nail: false
                    },
                    {
                        sku: 'MNT051',
                        barcode: '0080302280652',
                        label: '51',
                        nail: true
                    }
                ]
            },
            {
                size: 6,
                count: 1000,
                hover: false,
                children: [
                    {
                        sku: 'MNT060',
                        barcode: '0080302139127',
                        label: '60',
                        nail: false
                    },
                    {
                        sku: 'MNT061',
                        barcode: '0080302134757',
                        label: '61',
                        nail: true
                    }
                ]
            },
            {
                size: 8,
                count: 500,
                hover: false,
                children: [
                    {
                        sku: 'MNT080',
                        barcode: '0080302066942',
                        label: '81',
                        nail: false
                    },
                    {
                        sku: 'MNT081',
                        barcode: '0080302138403',
                        label: '80',
                        nail: true
                    }
                ]
            },
            {
                size: 10,
                count: 500,
                hover: false,
                children: [
                    {
                        sku: 'MNT100',
                        barcode: '0080302256145',
                        label: '10',
                        nail: false
                    },
                    {
                        sku: 'MNT101',
                        barcode: '0080302256077',
                        label: '11',
                        nail: true
                    }
                ]
            },
        ],
    },
    methods: {
        doPDF(item){
            exportPDF(item)
        }
    }
})
