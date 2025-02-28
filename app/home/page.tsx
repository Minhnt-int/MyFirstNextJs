import React from "react";
import BannerSlider from "../../components/BannerSlider";
import ProductShow from "../../components/ProductShow";


//khai báo biến products
const newest = [

    {
        "url": "cua-composite-canh-phang",
        "pic": "assets/img/product-page/KB-01-01-300x300.jpg",
        "productName": "Cửa Composite KB_01",
        "productPrice": 3100000,
        "height": 220,
        "width": 90,
        "type": "cua-go-nhua-composite",
        "material": "Gỗ nhựa Composite nguyên tấm phủ film PVC",
        "desc": "<div style='color: #cccccc;background-color: #1f1f1f;font-size: 14px;font-family: Consolas, 'Courier New', monospace;'><span style='color: #ce9178;'>C&aacute;nh cửa bằng dạng Panel nguy&ecirc;n tấm.</span><br><span style='color: #ce9178;'>Chất liệu: Gỗ nhựa Composite phủ film PVC</span><br><span style='color: #ce9178;'>K&iacute;ch thước ti&ecirc;u chuẩn: 900 x 2200 x 40 ( mm )</span><br><span style='color: #ce9178;'>Chiều d&agrave;y: 40mm</span><br><span style='color: #ce9178;'>Độ d&agrave;y th&agrave;nh v&aacute;ch:</span><br><span style='color: #ce9178;'>Khu&ocirc;n đơn: 100mm hoặc 125mm</span><br><span style='color: #ce9178;'>Nẹp: 30 x 55 ( mm ) hoặc 50 x 55 (mm )</span><br><span style='color: #ce9178;'>Gi&aacute; tr&ecirc;n chưa bao gồm kh&oacute;a cửa, lắp đặt, vận chuyển</span><br><span style='color: #ce9178;'>Ph&aacute;t sinh chi ph&iacute; khi k&iacute;ch thước thực tế vượt k&iacute;ch thước ti&ecirc;u chuẩn</span></div>"
    },
    {
        "url": "cua-cong-nghiep-mau-01",
        "pic": "assets/img/product-page/KB-01-2-01-300x300.jpg",
        "height": 220,
        "width": 135,
        "type": "cua-go-nhua-composite",
        "material": "Gỗ nhựa Composite nguyên tấm phủ film PVC",
        "productName": "Cửa Composite KB_01 2",
        "productPrice": 5400000,
        "desc": "<div style='color: #cccccc;background-color: #1f1f1f;font-size: 14px;font-family: Consolas, 'Courier New', monospace;'><span style='color: #ce9178;'>C&aacute;nh cửa bằng dạng Panel nguy&ecirc;n tấm.</span><br><span style='color: #ce9178;'>Chất liệu: Gỗ nhựa Composite phủ film PVC</span><br><span style='color: #ce9178;'>K&iacute;ch thước ti&ecirc;u chuẩn: 1350 x 2200 x 40 ( mm )</span><br><span style='color: #ce9178;'>Chiều d&agrave;y: 40mm</span><br><span style='color: #ce9178;'>Độ d&agrave;y th&agrave;nh v&aacute;ch:</span><br><span style='color: #ce9178;'>Khu&ocirc;n đơn: 100mm hoặc 125mm</span><br><span style='color: #ce9178;'>Nẹp: 30 x 55 ( mm ) hoặc 50 x 55 (mm )</span></div>"
    },
    {
        "url": "cua-composite-kb_01-sa",
        "pic": "assets/img/product-page/KB-01-SA-01-300x300.jpg",
        "height": 220,
        "width": 90,
                "type": "cua-go-nhua-composite",
        "material": "Gỗ nhựa Composite nguyên tấm phủ film PVC",
        "productName": "Cửa Composite KB_01 SA",
        "productPrice": 3250000,
        "desc": "<div style='color: #cccccc;background-color: #1f1f1f;font-size: 14px;font-family: Consolas, 'Courier New', monospace;'><span style='color: #ce9178;'>C&aacute;nh cửa bằng dạng Panel nguy&ecirc;n tấm.</span><br><span style='color: #ce9178;'>Chất liệu: Gỗ nhựa Composite phủ film PVC</span><br><span style='color: #ce9178;'>Soi chỉ sơn trắng trang tr&iacute; &acirc;m</span><br><span style='color: #ce9178;'>K&iacute;ch thước ti&ecirc;u chuẩn: 900 x 2200 x 40 ( mm )</span><br><span style='color: #ce9178;'>Chiều d&agrave;y: 40mm</span><br><span style='color: #ce9178;'>Độ d&agrave;y th&agrave;nh v&aacute;ch:</span><br><span style='color: #ce9178;'>Khu&ocirc;n đơn: 100mm hoặc 125mm</span><br><span style='color: #ce9178;'>Nẹp: 30 x 55 ( mm ) hoặc 50 x 55 (mm )</span><br><span style='color: #ce9178;'>Gi&aacute; tr&ecirc;n chưa bao gồm kh&oacute;a cửa, lắp đặt, vận chuyển</span><br><span style='color: #ce9178;'>Ph&aacute;t sinh chi ph&iacute; khi k&iacute;ch thước thực tế vượt k&iacute;ch thước ti&ecirc;u chuẩn</span></div>"
    },
];
const hotest = [
    {
        "url": "cua-composite-kb_01-ss",
        "pic": "assets/img/product-page/KB-01-SS-01-300x300.jpg",
        "height": 220,
        "width": 90,
                "type": "cua-go-nhua-composite",
        "material": "Gỗ nhựa Composite nguyên tấm phủ film PVC",
        "productName": "Cửa Composite KB_01 SS",
        "productPrice": 3250000,
        "desc": "<div style='color: #cccccc;background-color: #1f1f1f;font-size: 14px;font-family: Consolas, 'Courier New', monospace;'><span style='color: #ce9178;'>C&aacute;nh cửa bằng dạng Panel nguy&ecirc;n tấm.</span><br><span style='color: #ce9178;'>Chất liệu: Gỗ nhựa Composite phủ film PVC</span><br><span style='color: #ce9178;'>Soi chỉ sơn trắng trang tr&iacute; &acirc;m</span><br><span style='color: #ce9178;'>K&iacute;ch thước ti&ecirc;u chuẩn: 900 x 2200 x 40 ( mm )</span><br><span style='color: #ce9178;'>Chiều d&agrave;y: 40mm</span><br><span style='color: #ce9178;'>Độ d&agrave;y th&agrave;nh v&aacute;ch:</span><br><span style='color: #ce9178;'>Khu&ocirc;n đơn: 100mm hoặc 125mm</span><br><span style='color: #ce9178;'>Nẹp: 30 x 55 ( mm ) hoặc 50 x 55 (mm )</span><br><span style='color: #ce9178;'>Gi&aacute; tr&ecirc;n chưa bao gồm kh&oacute;a cửa, lắp đặt, vận chuyển</span><br><span style='color: #ce9178;'>Ph&aacute;t sinh chi ph&iacute; khi k&iacute;ch thước thực tế vượt k&iacute;ch thước ti&ecirc;u chuẩn</span></div>"
    },
    {
        "url": "cua-composite-mau-01",
        "pic": "assets/img/product-page/KB-01-2-CD-01-300x300.jpg",
        "height": 220,
        "width": 135,
                "type": "cua-go-nhua-composite",
        "material": "Gỗ nhựa Composite nguyên tấm phủ film PVC",
        "productName": "Cửa Composite KB_02 CD",
        "productPrice": 5600000,
        "desc": "<div style='color: #cccccc;background-color: #1f1f1f;font-size: 14px;font-family: Consolas, 'Courier New', monospace;'><span style='color: #ce9178;'>C&aacute;nh cửa bằng dạng Panel nguy&ecirc;n tấm.</span><br><span style='color: #ce9178;'>Chất liệu: Gỗ nhựa Composite phủ film PVC</span><br><span style='color: #ce9178;'>K&iacute;ch thước ti&ecirc;u chuẩn: 1350 x 2200 x 40 ( mm )</span><br><span style='color: #ce9178;'>Chiều d&agrave;y: 40mm</span><br><span style='color: #ce9178;'>Độ d&agrave;y th&agrave;nh v&aacute;ch:</span><br><span style='color: #ce9178;'>Khu&ocirc;n đơn: 100mm hoặc 125mm</span><br><span style='color: #ce9178;'>Nẹp: 30 x 55 ( mm ) hoặc 50 x 55 (mm )</span></div>"
    },
];
const sale = [
    {
        "url": "cua-composite-kb_02-cn",
        "pic": "assets/img/product-page/KB-02-CN-01-300x300.jpg",
        "height": 220,
        "width": 90,
                "type": "cua-go-nhua-composite",
        "material": "Gỗ nhựa Composite nguyên tấm phủ film PVC",
        "productName": "Cửa Composite KB_02 CN",
        "productPrice": 3450000,
        "desc": "<div style='color: #cccccc;background-color: #1f1f1f;font-size: 14px;font-family: Consolas, 'Courier New', monospace;'><span style='color: #ce9178;'>C&aacute;nh cửa bằng dạng Panel nguy&ecirc;n tấm.</span><br><span style='color: #ce9178;'>Chất liệu: Gỗ nhựa Composite phủ film PVC</span><br><span style='color: #ce9178;'>Soi 4 chỉ nh&ocirc;m ngang 2 mặt</span><br><span style='color: #ce9178;'>K&iacute;ch thước ti&ecirc;u chuẩn: 900 x 2200 x 40 ( mm )</span><br><span style='color: #ce9178;'>Chiều d&agrave;y: 40mm</span><br><span style='color: #ce9178;'>Độ d&agrave;y th&agrave;nh v&aacute;ch:</span><br><span style='color: #ce9178;'>Khu&ocirc;n đơn: 100mm hoặc 125mm</span><br><span style='color: #ce9178;'>Nẹp: 30 x 55 ( mm ) hoặc 50 x 55 (mm )</span><br><span style='color: #ce9178;'>Gi&aacute; tr&ecirc;n chưa bao gồm kh&oacute;a cửa, lắp đặt, vận chuyển</span><br><span style='color: #ce9178;'>Ph&aacute;t sinh chi ph&iacute; khi k&iacute;ch thước thực tế vượt k&iacute;ch thước ti&ecirc;u chuẩn</span></div>"
    },
    {
        "url": "cua-composite-kb_02-pa",
        "pic": "assets/img/product-page/KB-02-PA-01-300x300.jpg",
        "height": 220,
        "width": 90,
                "type": "cua-go-nhua-composite",
        "material": "Gỗ nhựa Composite nguyên tấm phủ film PVC",
        "productName": "Cửa Composite KB_02 PA",
        "productPrice": 3350000,
        "desc": "<div style='color: #cccccc;background-color: #1f1f1f;font-size: 14px;font-family: Consolas, 'Courier New', monospace;'><span style='color: #ce9178;'>C&aacute;nh cửa bằng dạng Panel nguy&ecirc;n tấm.</span><br><span style='color: #ce9178;'>Chất liệu: Gỗ nhựa Composite phủ film PVC</span><br><span style='color: #ce9178;'>Chi tiết CNC trang tr&iacute; &acirc;m</span><br><span style='color: #ce9178;'>K&iacute;ch thước ti&ecirc;u chuẩn: 900 x 2200 x 40 ( mm )</span><br><span style='color: #ce9178;'>Chiều d&agrave;y: 40mm</span><br><span style='color: #ce9178;'>Độ d&agrave;y th&agrave;nh v&aacute;ch:</span><br><span style='color: #ce9178;'>Khu&ocirc;n đơn: 100mm hoặc 125mm</span><br><span style='color: #ce9178;'>Nẹp: 30 x 55 ( mm ) hoặc 50 x 55 (mm )</span><br><span style='color: #ce9178;'>Gi&aacute; tr&ecirc;n chưa bao gồm kh&oacute;a cửa, lắp đặt, vận chuyển</span><br><span style='color: #ce9178;'>Ph&aacute;t sinh chi ph&iacute; khi k&iacute;ch thước thực tế vượt k&iacute;ch thước ti&ecirc;u chuẩn</span></div>"
    },
    {
        "url": "cua-composite-kb_02-pn-2",
        "pic": "assets/img/product-page/KB-02-1-PN-01-300x300.jpg",
        "height": 220,
        "width": 90,
                "type": "cua-go-nhua-composite",
        "material": "Gỗ nhựa Composite nguyên tấm phủ film PVC",
        "productName": "Cửa Composite KB_02 PN",
        "productPrice": 3800000,
        "desc": "<div style='color: #cccccc;background-color: #1f1f1f;font-size: 14px;font-family: Consolas, 'Courier New', monospace;'><span style='color: #ce9178;'>C&aacute;nh cửa bằng dạng Panel nguy&ecirc;n tấm.</span><br><span style='color: #ce9178;'>Chất liệu: Gỗ nhựa Composite phủ film PVC</span><br><span style='color: #ce9178;'>Trang tr&iacute; ph&agrave;o nổi t&acirc;n cổ điển</span><br><span style='color: #ce9178;'>K&iacute;ch thước ti&ecirc;u chuẩn: 900 x 2200 x 40 ( mm )</span><br><span style='color: #ce9178;'>Chiều d&agrave;y: 40mm</span><br><span style='color: #ce9178;'>Độ d&agrave;y th&agrave;nh v&aacute;ch:</span><br><span style='color: #ce9178;'>Khu&ocirc;n đơn: 100mm hoặc 125mm</span><br><span style='color: #ce9178;'>Nẹp: 30 x 55 ( mm ) hoặc 50 x 55 (mm )</span><br><span style='color: #ce9178;'>Gi&aacute; tr&ecirc;n chưa bao gồm kh&oacute;a cửa, lắp đặt, vận chuyển</span><br><span style='color: #ce9178;'>Ph&aacute;t sinh chi ph&iacute; khi k&iacute;ch thước thực tế vượt k&iacute;ch thước ti&ecirc;u chuẩn</span></div>"
    }
];

const HomePage = () => {
    return (
        <div>
            <BannerSlider />
            <section>
                <h2>Sản phẩm mới nhất</h2>
                <ProductShow products={newest} />
            </section>
            <section>
                <h2>Sản phẩm bán chạy nhất</h2>

                <ProductShow products={hotest} />
            </section>
            <section>
                <h2>Sản phẩm khuyến mãi</h2>
                <ProductShow products={sale} />
            </section>
        </div>
    );
};

export default HomePage;
