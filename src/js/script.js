const {jsPDF} = window.jspdf;

const exportPDF = function (item) {
    const width = 100;                      // total width
    const height = 100;                     // total height
    const padding = 5;                      // page padding
    const left_side = padding;
    const right_size = width - padding;
    const top_side = padding;
    const bottom_side = height - padding;

    const sep_line = 72;
    const barcode_width = 20;
    const barcode_height = 52;

    const product_label_font_size = 275;
    const unit_font_size = 70;
    const font_size = 48;
    const barcode_value_font_size = 12;

    const doc = new jsPDF({orientation: 'l', unit: 'mm', format: [width,height]});
    doc.addFileToVFS('/src/fonts/BebasNeue Light.ttf', BebasLight);
    doc.addFileToVFS('/src/fonts/BebasNeue Bold.ttf', BebasBold);

    doc.addFont('src/fonts/BebasNeue Light.ttf', 'BebasLight', 'normal')
    doc.addFont('src/fonts/BebasNeue Bold.ttf', 'BebasBold', 'normal')

    doc.setTextColor('#676666')
    doc.setFont('BebasBold');

    /*
     * Rakam ve birim işlemleri
     */
    doc.setFontSize(unit_font_size)
    const unit_width = doc.getTextWidth('cm')
    doc.text('cm' ,right_size - unit_width, sep_line);

    doc.setFontSize(product_label_font_size);
    const size_width = doc.getTextWidth(item.size.toString())
    doc.text(item.size.toString() ,right_size - unit_width - size_width, sep_line);

    /*
     * Barkod işlemleri
     */

    JsBarcode(
        "#barcode",
        item.barcode,
        {
            format: "EAN13",
            lineColor: '#676666',
            width: 1,
            height: barcode_height,
            displayValue: false,
        });
    const barcode = document.querySelector('img#barcode');
    doc.addImage(barcode.src, 'JPEG', right_size - 5, sep_line - 38 , barcode_height, barcode_width, '', 'MEDIUM', 90);

    doc.setFont('BebasLight')
    doc.setFontSize(barcode_value_font_size)
    // doc.text(item.barcode, right_size, sep_line - sep_line, {align: 'justify', angle: '90'})
    doc.text(item.barcode, right_size - 2, sep_line - unit_width + 2.2, {align: 'justify', angle: 90, charSpace: '2.2', maxWidth: barcode_height});

    doc.setFont('BebasLight');

    doc.setFontSize(font_size / 2);
    const adet_width = doc.getTextWidth('ADET');
    doc.text('ADET', right_size - adet_width, bottom_side);

    doc.setFontSize(font_size);
    const count_width = doc.getTextWidth(item.count.toString());
    doc.text(item.count.toString(), right_size - adet_width - count_width, bottom_side);

    if(item.nail){
        doc.text('ÇİVİLİ', left_side, bottom_side)
    }


    doc.autoPrint({variant: 'non-conform'});
    // doc.output("dataurlnewwindow");
    // doc.save(item.sku + '.pdf')
    window.open(doc.output('bloburl'), '_blank')
};
