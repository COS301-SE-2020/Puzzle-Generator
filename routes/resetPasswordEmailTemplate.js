const express = require('express');
const { response, request } = require('express');
const router = express.Router();
module.exports = {
  generateResetEmail: function () {
    var message = "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional //EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\"><!--[if IE]><html xmlns=\"http://www.w3.org/1999/xhtml\" class=\"ie\"><![endif]--><!--[if !IE]><!--><html style=\"margin: 0;padding: 0;\" xmlns=\"http://www.w3.org/1999/xhtml\"><!--<![endif]--><head>\n" +
      "    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n" +
      "    <title></title>\n" +
      "    <!--[if !mso]><!--><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" /><!--<![endif]-->\n" +
      "    <meta name=\"viewport\" content=\"width=device-width\" /><style type=\"text/css\">\n" +
      "@media only screen and (min-width: 620px){.wrapper{min-width:600px !important}.wrapper h1{}.wrapper h1{font-size:40px !important;line-height:47px !important}.wrapper h2{}.wrapper h2{font-size:24px !important;line-height:32px !important}.wrapper h3{}.wrapper h3{font-size:20px !important;line-height:28px !important}.column{}.wrapper .size-8{font-size:8px !important;line-height:14px !important}.wrapper .size-9{font-size:9px !important;line-height:16px !important}.wrapper .size-10{font-size:10px !important;line-height:18px !important}.wrapper .size-11{font-size:11px !important;line-height:19px !important}.wrapper .size-12{font-size:12px !important;line-height:19px !important}.wrapper .size-13{font-size:13px !important;line-height:21px !important}.wrapper .size-14{font-size:14px !important;line-height:21px !important}.wrapper .size-15{font-size:15px !important;line-height:23px\n" +
      "!important}.wrapper .size-16{font-size:16px !important;line-height:24px !important}.wrapper .size-17{font-size:17px !important;line-height:26px !important}.wrapper .size-18{font-size:18px !important;line-height:26px !important}.wrapper .size-20{font-size:20px !important;line-height:28px !important}.wrapper .size-22{font-size:22px !important;line-height:31px !important}.wrapper .size-24{font-size:24px !important;line-height:32px !important}.wrapper .size-26{font-size:26px !important;line-height:34px !important}.wrapper .size-28{font-size:28px !important;line-height:36px !important}.wrapper .size-30{font-size:30px !important;line-height:38px !important}.wrapper .size-32{font-size:32px !important;line-height:40px !important}.wrapper .size-34{font-size:34px !important;line-height:43px !important}.wrapper .size-36{font-size:36px !important;line-height:43px !important}.wrapper\n" +
      ".size-40{font-size:40px !important;line-height:47px !important}.wrapper .size-44{font-size:44px !important;line-height:50px !important}.wrapper .size-48{font-size:48px !important;line-height:54px !important}.wrapper .size-56{font-size:56px !important;line-height:60px !important}.wrapper .size-64{font-size:64px !important;line-height:63px !important}}\n" +
      "</style>\n" +
      "    <meta name=\"x-apple-disable-message-reformatting\" />\n" +
      "    <style type=\"text/css\">\n" +
      "body {\n" +
      "  margin: 0;\n" +
      "  padding: 0;\n" +
      "}\n" +
      "table {\n" +
      "  border-collapse: collapse;\n" +
      "  table-layout: fixed;\n" +
      "}\n" +
      "* {\n" +
      "  line-height: inherit;\n" +
      "}\n" +
      "[x-apple-data-detectors] {\n" +
      "  color: inherit !important;\n" +
      "  text-decoration: none !important;\n" +
      "}\n" +
      ".wrapper .footer__share-button a:hover,\n" +
      ".wrapper .footer__share-button a:focus {\n" +
      "  color: #ffffff !important;\n" +
      "}\n" +
      ".btn a:hover,\n" +
      ".btn a:focus,\n" +
      ".footer__share-button a:hover,\n" +
      ".footer__share-button a:focus,\n" +
      ".email-footer__links a:hover,\n" +
      ".email-footer__links a:focus {\n" +
      "  opacity: 0.8;\n" +
      "}\n" +
      ".preheader,\n" +
      ".header,\n" +
      ".layout,\n" +
      ".column {\n" +
      "  transition: width 0.25s ease-in-out, max-width 0.25s ease-in-out;\n" +
      "}\n" +
      ".preheader td {\n" +
      "  padding-bottom: 8px;\n" +
      "}\n" +
      ".layout,\n" +
      "div.header {\n" +
      "  max-width: 400px !important;\n" +
      "  -fallback-width: 95% !important;\n" +
      "  width: calc(100% - 20px) !important;\n" +
      "}\n" +
      "div.preheader {\n" +
      "  max-width: 360px !important;\n" +
      "  -fallback-width: 90% !important;\n" +
      "  width: calc(100% - 60px) !important;\n" +
      "}\n" +
      ".snippet,\n" +
      ".webversion {\n" +
      "  Float: none !important;\n" +
      "}\n" +
      ".stack .column {\n" +
      "  max-width: 400px !important;\n" +
      "  width: 100% !important;\n" +
      "}\n" +
      ".fixed-width.has-border {\n" +
      "  max-width: 402px !important;\n" +
      "}\n" +
      ".fixed-width.has-border .layout__inner {\n" +
      "  box-sizing: border-box;\n" +
      "}\n" +
      ".snippet,\n" +
      ".webversion {\n" +
      "  width: 50% !important;\n" +
      "}\n" +
      ".ie .btn {\n" +
      "  width: 100%;\n" +
      "}\n" +
      ".ie .stack .column,\n" +
      ".ie .stack .gutter {\n" +
      "  display: table-cell;\n" +
      "  float: none !important;\n" +
      "}\n" +
      ".ie div.preheader,\n" +
      ".ie .email-footer {\n" +
      "  max-width: 560px !important;\n" +
      "  width: 560px !important;\n" +
      "}\n" +
      ".ie .snippet,\n" +
      ".ie .webversion {\n" +
      "  width: 280px !important;\n" +
      "}\n" +
      ".ie div.header,\n" +
      ".ie .layout {\n" +
      "  max-width: 600px !important;\n" +
      "  width: 600px !important;\n" +
      "}\n" +
      ".ie .two-col .column {\n" +
      "  max-width: 300px !important;\n" +
      "  width: 300px !important;\n" +
      "}\n" +
      ".ie .three-col .column,\n" +
      ".ie .narrow {\n" +
      "  max-width: 200px !important;\n" +
      "  width: 200px !important;\n" +
      "}\n" +
      ".ie .wide {\n" +
      "  width: 400px !important;\n" +
      "}\n" +
      ".ie .stack.fixed-width.has-border,\n" +
      ".ie .stack.has-gutter.has-border {\n" +
      "  max-width: 602px !important;\n" +
      "  width: 602px !important;\n" +
      "}\n" +
      ".ie .stack.two-col.has-gutter .column {\n" +
      "  max-width: 290px !important;\n" +
      "  width: 290px !important;\n" +
      "}\n" +
      ".ie .stack.three-col.has-gutter .column,\n" +
      ".ie .stack.has-gutter .narrow {\n" +
      "  max-width: 188px !important;\n" +
      "  width: 188px !important;\n" +
      "}\n" +
      ".ie .stack.has-gutter .wide {\n" +
      "  max-width: 394px !important;\n" +
      "  width: 394px !important;\n" +
      "}\n" +
      ".ie .stack.two-col.has-gutter.has-border .column {\n" +
      "  max-width: 292px !important;\n" +
      "  width: 292px !important;\n" +
      "}\n" +
      ".ie .stack.three-col.has-gutter.has-border .column,\n" +
      ".ie .stack.has-gutter.has-border .narrow {\n" +
      "  max-width: 190px !important;\n" +
      "  width: 190px !important;\n" +
      "}\n" +
      ".ie .stack.has-gutter.has-border .wide {\n" +
      "  max-width: 396px !important;\n" +
      "  width: 396px !important;\n" +
      "}\n" +
      ".ie .fixed-width .layout__inner {\n" +
      "  border-left: 0 none white !important;\n" +
      "  border-right: 0 none white !important;\n" +
      "}\n" +
      ".ie .layout__edges {\n" +
      "  display: none;\n" +
      "}\n" +
      ".mso .layout__edges {\n" +
      "  font-size: 0;\n" +
      "}\n" +
      ".layout-fixed-width,\n" +
      ".mso .layout-full-width {\n" +
      "  background-color: #ffffff;\n" +
      "}\n" +
      "@media only screen and (min-width: 620px) {\n" +
      "  .column,\n" +
      "  .gutter {\n" +
      "    display: table-cell;\n" +
      "    Float: none !important;\n" +
      "    vertical-align: top;\n" +
      "  }\n" +
      "  div.preheader,\n" +
      "  .email-footer {\n" +
      "    max-width: 560px !important;\n" +
      "    width: 560px !important;\n" +
      "  }\n" +
      "  .snippet,\n" +
      "  .webversion {\n" +
      "    width: 280px !important;\n" +
      "  }\n" +
      "  div.header,\n" +
      "  .layout,\n" +
      "  .one-col .column {\n" +
      "    max-width: 600px !important;\n" +
      "    width: 600px !important;\n" +
      "  }\n" +
      "  .fixed-width.has-border,\n" +
      "  .fixed-width.x_has-border,\n" +
      "  .has-gutter.has-border,\n" +
      "  .has-gutter.x_has-border {\n" +
      "    max-width: 602px !important;\n" +
      "    width: 602px !important;\n" +
      "  }\n" +
      "  .two-col .column {\n" +
      "    max-width: 300px !important;\n" +
      "    width: 300px !important;\n" +
      "  }\n" +
      "  .three-col .column,\n" +
      "  .column.narrow,\n" +
      "  .column.x_narrow {\n" +
      "    max-width: 200px !important;\n" +
      "    width: 200px !important;\n" +
      "  }\n" +
      "  .column.wide,\n" +
      "  .column.x_wide {\n" +
      "    width: 400px !important;\n" +
      "  }\n" +
      "  .two-col.has-gutter .column,\n" +
      "  .two-col.x_has-gutter .column {\n" +
      "    max-width: 290px !important;\n" +
      "    width: 290px !important;\n" +
      "  }\n" +
      "  .three-col.has-gutter .column,\n" +
      "  .three-col.x_has-gutter .column,\n" +
      "  .has-gutter .narrow {\n" +
      "    max-width: 188px !important;\n" +
      "    width: 188px !important;\n" +
      "  }\n" +
      "  .has-gutter .wide {\n" +
      "    max-width: 394px !important;\n" +
      "    width: 394px !important;\n" +
      "  }\n" +
      "  .two-col.has-gutter.has-border .column,\n" +
      "  .two-col.x_has-gutter.x_has-border .column {\n" +
      "    max-width: 292px !important;\n" +
      "    width: 292px !important;\n" +
      "  }\n" +
      "  .three-col.has-gutter.has-border .column,\n" +
      "  .three-col.x_has-gutter.x_has-border .column,\n" +
      "  .has-gutter.has-border .narrow,\n" +
      "  .has-gutter.x_has-border .narrow {\n" +
      "    max-width: 190px !important;\n" +
      "    width: 190px !important;\n" +
      "  }\n" +
      "  .has-gutter.has-border .wide,\n" +
      "  .has-gutter.x_has-border .wide {\n" +
      "    max-width: 396px !important;\n" +
      "    width: 396px !important;\n" +
      "  }\n" +
      "}\n" +
      "@supports (display: flex) {\n" +
      "  @media only screen and (min-width: 620px) {\n" +
      "    .fixed-width.has-border .layout__inner {\n" +
      "      display: flex !important;\n" +
      "    }\n" +
      "  }\n" +
      "}\n" +
      "@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx) {\n" +
      "  .fblike {\n" +
      "    background-image: url(https://i7.createsend1.com/static/eb/master/13-the-blueprint-3/images/fblike@2x.png) !important;\n" +
      "  }\n" +
      "  .tweet {\n" +
      "    background-image: url(https://i8.createsend1.com/static/eb/master/13-the-blueprint-3/images/tweet@2x.png) !important;\n" +
      "  }\n" +
      "  .linkedinshare {\n" +
      "    background-image: url(https://i9.createsend1.com/static/eb/master/13-the-blueprint-3/images/lishare@2x.png) !important;\n" +
      "  }\n" +
      "  .forwardtoafriend {\n" +
      "    background-image: url(https://i10.createsend1.com/static/eb/master/13-the-blueprint-3/images/forward@2x.png) !important;\n" +
      "  }\n" +
      "}\n" +
      "@media (max-width: 321px) {\n" +
      "  .fixed-width.has-border .layout__inner {\n" +
      "    border-width: 1px 0 !important;\n" +
      "  }\n" +
      "  .layout,\n" +
      "  .stack .column {\n" +
      "    min-width: 320px !important;\n" +
      "    width: 320px !important;\n" +
      "  }\n" +
      "  .border {\n" +
      "    display: none;\n" +
      "  }\n" +
      "  .has-gutter .border {\n" +
      "    display: table-cell;\n" +
      "  }\n" +
      "}\n" +
      ".mso div {\n" +
      "  border: 0 none white !important;\n" +
      "}\n" +
      ".mso .w560 .divider {\n" +
      "  Margin-left: 260px !important;\n" +
      "  Margin-right: 260px !important;\n" +
      "}\n" +
      ".mso .w360 .divider {\n" +
      "  Margin-left: 160px !important;\n" +
      "  Margin-right: 160px !important;\n" +
      "}\n" +
      ".mso .w260 .divider {\n" +
      "  Margin-left: 110px !important;\n" +
      "  Margin-right: 110px !important;\n" +
      "}\n" +
      ".mso .w160 .divider {\n" +
      "  Margin-left: 60px !important;\n" +
      "  Margin-right: 60px !important;\n" +
      "}\n" +
      ".mso .w354 .divider {\n" +
      "  Margin-left: 157px !important;\n" +
      "  Margin-right: 157px !important;\n" +
      "}\n" +
      ".mso .w250 .divider {\n" +
      "  Margin-left: 105px !important;\n" +
      "  Margin-right: 105px !important;\n" +
      "}\n" +
      ".mso .w148 .divider {\n" +
      "  Margin-left: 54px !important;\n" +
      "  Margin-right: 54px !important;\n" +
      "}\n" +
      ".mso .size-8,\n" +
      ".ie .size-8 {\n" +
      "  font-size: 8px !important;\n" +
      "  line-height: 14px !important;\n" +
      "}\n" +
      ".mso .size-9,\n" +
      ".ie .size-9 {\n" +
      "  font-size: 9px !important;\n" +
      "  line-height: 16px !important;\n" +
      "}\n" +
      ".mso .size-10,\n" +
      ".ie .size-10 {\n" +
      "  font-size: 10px !important;\n" +
      "  line-height: 18px !important;\n" +
      "}\n" +
      ".mso .size-11,\n" +
      ".ie .size-11 {\n" +
      "  font-size: 11px !important;\n" +
      "  line-height: 19px !important;\n" +
      "}\n" +
      ".mso .size-12,\n" +
      ".ie .size-12 {\n" +
      "  font-size: 12px !important;\n" +
      "  line-height: 19px !important;\n" +
      "}\n" +
      ".mso .size-13,\n" +
      ".ie .size-13 {\n" +
      "  font-size: 13px !important;\n" +
      "  line-height: 21px !important;\n" +
      "}\n" +
      ".mso .size-14,\n" +
      ".ie .size-14 {\n" +
      "  font-size: 14px !important;\n" +
      "  line-height: 21px !important;\n" +
      "}\n" +
      ".mso .size-15,\n" +
      ".ie .size-15 {\n" +
      "  font-size: 15px !important;\n" +
      "  line-height: 23px !important;\n" +
      "}\n" +
      ".mso .size-16,\n" +
      ".ie .size-16 {\n" +
      "  font-size: 16px !important;\n" +
      "  line-height: 24px !important;\n" +
      "}\n" +
      ".mso .size-17,\n" +
      ".ie .size-17 {\n" +
      "  font-size: 17px !important;\n" +
      "  line-height: 26px !important;\n" +
      "}\n" +
      ".mso .size-18,\n" +
      ".ie .size-18 {\n" +
      "  font-size: 18px !important;\n" +
      "  line-height: 26px !important;\n" +
      "}\n" +
      ".mso .size-20,\n" +
      ".ie .size-20 {\n" +
      "  font-size: 20px !important;\n" +
      "  line-height: 28px !important;\n" +
      "}\n" +
      ".mso .size-22,\n" +
      ".ie .size-22 {\n" +
      "  font-size: 22px !important;\n" +
      "  line-height: 31px !important;\n" +
      "}\n" +
      ".mso .size-24,\n" +
      ".ie .size-24 {\n" +
      "  font-size: 24px !important;\n" +
      "  line-height: 32px !important;\n" +
      "}\n" +
      ".mso .size-26,\n" +
      ".ie .size-26 {\n" +
      "  font-size: 26px !important;\n" +
      "  line-height: 34px !important;\n" +
      "}\n" +
      ".mso .size-28,\n" +
      ".ie .size-28 {\n" +
      "  font-size: 28px !important;\n" +
      "  line-height: 36px !important;\n" +
      "}\n" +
      ".mso .size-30,\n" +
      ".ie .size-30 {\n" +
      "  font-size: 30px !important;\n" +
      "  line-height: 38px !important;\n" +
      "}\n" +
      ".mso .size-32,\n" +
      ".ie .size-32 {\n" +
      "  font-size: 32px !important;\n" +
      "  line-height: 40px !important;\n" +
      "}\n" +
      ".mso .size-34,\n" +
      ".ie .size-34 {\n" +
      "  font-size: 34px !important;\n" +
      "  line-height: 43px !important;\n" +
      "}\n" +
      ".mso .size-36,\n" +
      ".ie .size-36 {\n" +
      "  font-size: 36px !important;\n" +
      "  line-height: 43px !important;\n" +
      "}\n" +
      ".mso .size-40,\n" +
      ".ie .size-40 {\n" +
      "  font-size: 40px !important;\n" +
      "  line-height: 47px !important;\n" +
      "}\n" +
      ".mso .size-44,\n" +
      ".ie .size-44 {\n" +
      "  font-size: 44px !important;\n" +
      "  line-height: 50px !important;\n" +
      "}\n" +
      ".mso .size-48,\n" +
      ".ie .size-48 {\n" +
      "  font-size: 48px !important;\n" +
      "  line-height: 54px !important;\n" +
      "}\n" +
      ".mso .size-56,\n" +
      ".ie .size-56 {\n" +
      "  font-size: 56px !important;\n" +
      "  line-height: 60px !important;\n" +
      "}\n" +
      ".mso .size-64,\n" +
      ".ie .size-64 {\n" +
      "  font-size: 64px !important;\n" +
      "  line-height: 63px !important;\n" +
      "}\n" +
      "</style>\n" +
      "\n" +
      "  <!--[if !mso]><!--><style type=\"text/css\">\n" +
      "@import url(https://fonts.googleapis.com/css?family=Karla:400,700,400italic,700italic|Montserrat:400,700,400italic);\n" +
      "</style><link href=\"https://fonts.googleapis.com/css?family=Karla:400,700,400italic,700italic|Montserrat:400,700,400italic\" rel=\"stylesheet\" type=\"text/css\" /><!--<![endif]--><style type=\"text/css\">\n" +
      "body{background-color:#fff}.logo a:hover,.logo a:focus{color:#1e2e3b !important}.mso .layout-has-border{border-top:1px solid #ccc;border-bottom:1px solid #ccc}.mso .layout-has-bottom-border{border-bottom:1px solid #ccc}.mso .border,.ie .border{background-color:#ccc}.mso h1,.ie h1{}.mso h1,.ie h1{font-size:40px !important;line-height:47px !important}.mso h2,.ie h2{}.mso h2,.ie h2{font-size:24px !important;line-height:32px !important}.mso h3,.ie h3{}.mso h3,.ie h3{font-size:20px !important;line-height:28px !important}.mso .layout__inner,.ie .layout__inner{}.mso .footer__share-button p{}.mso .footer__share-button p{font-family:Karla,Calibri,Geneva,sans-serif}\n" +
      "</style><meta name=\"robots\" content=\"noindex,nofollow\" />\n" +
      "<meta property=\"og:title\" content=\"Reset Password\" />\n" +
      "</head>\n" +
      "<!--[if mso]>\n" +
      "  <body class=\"mso\">\n" +
      "<![endif]-->\n" +
      "<!--[if !mso]><!-->\n" +
      "  <body class=\"no-padding\" style=\"margin: 0;padding: 0;-webkit-text-size-adjust: 100%;\">\n" +
      "<!--<![endif]-->\n" +
      "    <table class=\"wrapper\" style=\"border-collapse: collapse;table-layout: fixed;min-width: 320px;width: 100%;background-color: #fff;\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\"><tbody><tr><td>\n" +
      "      <div role=\"banner\">\n" +
      "        <div class=\"preheader\" style=\"Margin: 0 auto;max-width: 560px;min-width: 280px; width: 280px;width: calc(28000% - 167440px);\">\n" +
      "          <div style=\"border-collapse: collapse;display: table;width: 100%;\">\n" +
      "          <!--[if (mso)|(IE)]><table align=\"center\" class=\"preheader\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\"><tr><td style=\"width: 280px\" valign=\"top\"><![endif]-->\n" +
      "            <div class=\"snippet\" style=\"display: table-cell;Float: left;font-size: 12px;line-height: 19px;max-width: 280px;min-width: 140px; width: 140px;width: calc(14000% - 78120px);padding: 10px 0 5px 0;color: #363f48;font-family: Karla,Calibri,Geneva,sans-serif;\">\n" +
      "\n" +
      "            </div>\n" +
      "          <!--[if (mso)|(IE)]></td><td style=\"width: 280px\" valign=\"top\"><![endif]-->\n" +
      "            <div class=\"webversion\" style=\"display: table-cell;Float: left;font-size: 12px;line-height: 19px;max-width: 280px;min-width: 139px; width: 139px;width: calc(14100% - 78680px);padding: 10px 0 5px 0;text-align: right;color: #363f48;font-family: Karla,Calibri,Geneva,sans-serif;\">\n" +
      "              <p style=\"Margin-top: 0;Margin-bottom: 0;\">No images? <webversion style=\"text-decoration: underline;\">Click here</webversion></p>\n" +
      "            </div>\n" +
      "          <!--[if (mso)|(IE)]></td></tr></table><![endif]-->\n" +
      "          </div>\n" +
      "        </div>\n" +
      "        <div class=\"header\" style=\"Margin: 0 auto;max-width: 600px;min-width: 320px; width: 320px;width: calc(28000% - 167400px);\" id=\"emb-email-header-container\">\n" +
      "        <!--[if (mso)|(IE)]><table align=\"center\" class=\"header\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\"><tr><td style=\"width: 600px\"><![endif]-->\n" +
      "          <div class=\"logo emb-logo-margin-box\" style=\"font-size: 26px;line-height: 32px;Margin-top: 6px;Margin-bottom: 20px;color: #41637e;font-family: Avenir,sans-serif;Margin-left: 20px;Margin-right: 20px;\" align=\"center\">\n" +
      "            <div class=\"logo-center\" align=\"center\" id=\"emb-email-header\"><img style=\"display: block;height: auto;width: 100%;border: 0;max-width: 322px;\" src=\"images/logo_nav.png\" alt=\"\" width=\"322\" /></div>\n" +
      "          </div>\n" +
      "        <!--[if (mso)|(IE)]></td></tr></table><![endif]-->\n" +
      "        </div>\n" +
      "      </div>\n" +
      "      <div>\n" +
      "      <div style=\"background-color: #ffffff;\">\n" +
      "        <div class=\"layout one-col stack\" style=\"Margin: 0 auto;max-width: 600px;min-width: 320px; width: 320px;width: calc(28000% - 167400px);overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;\">\n" +
      "          <div class=\"layout__inner\" style=\"border-collapse: collapse;display: table;width: 100%;\">\n" +
      "          <!--[if (mso)|(IE)]><table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\"><tr class=\"layout-full-width\" style=\"background-color: #ffffff;\"><td class=\"layout__edges\">&nbsp;</td><td style=\"width: 600px\" class=\"w560\"><![endif]-->\n" +
      "            <div class=\"column\" style=\"text-align: left;color: #363f48;font-size: 16px;line-height: 24px;font-family: Karla,Calibri,Geneva,sans-serif;\">\n" +
      "\n" +
      "              <div style=\"Margin-left: 20px;Margin-right: 20px;\">\n" +
      "      <div style=\"mso-line-height-rule: exactly;mso-text-raise: 11px;vertical-align: middle;\">\n" +
      "        <h1 style=\"Margin-top: 0;Margin-bottom: 0;font-style: normal;font-weight: normal;color: #363f48;font-size: 32px;line-height: 40px;font-family: Montserrat,DejaVu Sans,Verdana,sans-serif;text-align: center;\"><strong>Reset your Password.</strong></h1>\n" +
      "        <p style=\"Margin-top: 20px;Margin-bottom: 0;\">Hi there,</p>\n" +
      "        <p style=\"Margin-top: 20px;Margin-bottom: 0;\">You recently requested to reset your password for Prometheus Puzzles.</p>\n" +
      "        <p style=\"Margin-top: 20px;Margin-bottom: 20px;\">Click here to reset your password. This link will expire in 3 hours</p>\n" +
      "        <div style=\"Margin-left: 20px;Margin-right: 20px;\">\n" +
      "          <div class=\"btn btn--flat btn--large\" style=\"Margin-bottom: 20px;text-align: center;\">\n" +
      "            <![if !mso]><a style=\"border-radius: 4px;display: inline-block;font-size: 14px;font-weight: bold;line-height: 24px;padding: 12px 24px;text-align: center;text-decoration: none !important;transition: opacity 0.1s ease-in;color: #ffffff !important;background-color: #15b05e;font-family: Karla, Calibri, Geneva, sans-serif;\" href=\"https://prometheuspuzzles.herokuapp.com/resetPassword\">RESET</a><![endif]>\n" +
      "            <!--[if mso]><p style=\"line-height:0;margin:0;\">&nbsp;</p><v:roundrect xmlns:v=\"urn:schemas-microsoft-com:vml\" href=\"https://prometheuspuzzles.herokuapp.com/resetPassword\" style=\"width:94px\" arcsize=\"9%\" fillcolor=\"#15B05E\" stroke=\"f\"><v:textbox style=\"mso-fit-shape-to-text:t\" inset=\"0px,11px,0px,11px\"><center style=\"font-size:14px;line-height:24px;color:#FFFFFF;font-family:Karla,Calibri,Geneva,sans-serif;font-weight:bold;mso-line-height-rule:exactly;mso-text-raise:4px\">VERIFY</center></v:textbox></v:roundrect><![endif]--></div>\n" +
      "        </div>\n" +
      "        <p style=\"Margin-top: 20px;Margin-bottom: 0;\">If you did not request a password reset, please ignore this email.</p>\n" +
      "        <p style=\"Margin-top: 20px;Margin-bottom: 0;\">Love Team Prometheus</p>\n" +
      "\n" +
      "      </div>\n" +
      "    </div>\n" +
      "\n" +
      "\n" +
      "\n" +
      "              <div style=\"Margin-left: 20px;Margin-right: 20px;\">\n" +
      "      <div style=\"mso-line-height-rule: exactly;line-height: 40px;font-size: 1px;\">&nbsp;</div>\n" +
      "    </div>\n" +
      "\n" +
      "            </div>\n" +
      "          <!--[if (mso)|(IE)]></td><td class=\"layout__edges\">&nbsp;</td></tr></table><![endif]-->\n" +
      "          </div>\n" +
      "        </div>\n" +
      "      </div>\n" +
      "\n" +
      "      <div class=\"layout one-col fixed-width stack\" style=\"Margin: 0 auto;max-width: 600px;min-width: 320px; width: 320px;width: calc(28000% - 167400px);overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;\">\n" +
      "        <div class=\"layout__inner\" style=\"border-collapse: collapse;display: table;width: 100%;background-color: #ffffff;\">\n" +
      "        <!--[if (mso)|(IE)]><table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\"><tr class=\"layout-fixed-width\" style=\"background-color: #ffffff;\"><td style=\"width: 600px\" class=\"w560\"><![endif]-->\n" +
      "          <div class=\"column\" style=\"text-align: left;color: #363f48;font-size: 16px;line-height: 24px;font-family: Karla,Calibri,Geneva,sans-serif;\">\n" +
      "\n" +
      "        <div style=\"font-size: 12px;font-style: normal;font-weight: normal;line-height: 19px;\" align=\"center\">\n" +
      "          <img class=\"gnd-corner-image gnd-corner-image-center gnd-corner-image-top\" style=\"border: 0;display: block;height: auto;width: 100%;max-width: 900px;\" alt=\"\" width=\"600\" src=\"images/web1-9900000000079e3c.jpg\" />\n" +
      "        </div>\n" +
      "\n" +
      "            <div style=\"Margin-left: 20px;Margin-right: 20px;Margin-top: 20px;\">\n" +
      "      <div style=\"mso-line-height-rule: exactly;mso-text-raise: 11px;vertical-align: middle;\">\n" +
      "        <h1 style=\"Margin-top: 0;Margin-bottom: 0;font-style: normal;font-weight: normal;color: #363f48;font-size: 32px;line-height: 40px;font-family: Montserrat,DejaVu Sans,Verdana,sans-serif;text-align: center;\"><strong>Still have questions?</strong></h1><p style=\"Margin-top: 20px;Margin-bottom: 20px;text-align: center;\">We&#8217;re happy to help with any questions you might have. Check out more information on our helpful features at the link below!</p>\n" +
      "      </div>\n" +
      "    </div>\n" +
      "\n" +
      "            <div style=\"Margin-left: 20px;Margin-right: 20px;\">\n" +
      "      <div style=\"mso-line-height-rule: exactly;line-height: 10px;font-size: 1px;\">&nbsp;</div>\n" +
      "    </div>\n" +
      "\n" +
      "          </div>\n" +
      "        <!--[if (mso)|(IE)]></td></tr></table><![endif]-->\n" +
      "        </div>\n" +
      "      </div>\n" +
      "\n" +
      "      <div style=\"mso-line-height-rule: exactly;line-height: 20px;font-size: 20px;\">&nbsp;</div>\n" +
      "\n" +
      "\n" +
      "      <div role=\"contentinfo\">\n" +
      "        <div class=\"layout email-footer stack\" style=\"Margin: 0 auto;max-width: 600px;min-width: 320px; width: 320px;width: calc(28000% - 167400px);overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;\">\n" +
      "          <div class=\"layout__inner\" style=\"border-collapse: collapse;display: table;width: 100%;\">\n" +
      "          <!--[if (mso)|(IE)]><table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\"><tr class=\"layout-email-footer\"><td style=\"width: 400px;\" valign=\"top\" class=\"w360\"><![endif]-->\n" +
      "            <div class=\"column wide\" style=\"text-align: left;font-size: 12px;line-height: 19px;color: #363f48;font-family: Karla,Calibri,Geneva,sans-serif;Float: left;max-width: 400px;min-width: 320px; width: 320px;width: calc(8000% - 47600px);\">\n" +
      "              <div style=\"Margin-left: 20px;Margin-right: 20px;Margin-top: 10px;Margin-bottom: 10px;\">\n" +
      "                <table class=\"email-footer__links\" style=\"border-collapse: collapse;table-layout: fixed;\" role=\"presentation\" emb-web-links><tbody><tr role=\"navigation\">\n" +
      "                <td style=\"padding: 0;width: 26px;\" emb-web-links><a style=\"text-decoration: underline;transition: opacity 0.1s ease-in;color: #363f48;\" href=\"https://prometheuspuzzles.herokuapp.com/\"><img style=\"border: 0;\" src=\"https://i7.createsend1.com/static/eb/master/13-the-blueprint-3/images/website.png\" width=\"26\" height=\"26\" alt=\"Website\" /></a></td>\n" +
      "                </tr></tbody></table>\n" +
      "                <div style=\"font-size: 12px;line-height: 19px;Margin-top: 20px;\">\n" +
      "                  <div>Prometheus Puzzles</div>\n" +
      "                </div>\n" +
      "                <div style=\"font-size: 12px;line-height: 19px;Margin-top: 18px;\">\n" +
      "                  <div>You are receiving this email because your email was used to sign up to Prometheus Puzzles</div>\n" +
      "                </div>\n" +
      "                <!--[if mso]>&nbsp;<![endif]-->\n" +
      "              </div>\n" +
      "            </div>\n" +
      "          <!--[if (mso)|(IE)]></td><td style=\"width: 200px;\" valign=\"top\" class=\"w160\"><![endif]-->\n" +
      "            <div class=\"column narrow\" style=\"text-align: left;font-size: 12px;line-height: 19px;color: #363f48;font-family: Karla,Calibri,Geneva,sans-serif;Float: left;max-width: 320px;min-width: 200px; width: 320px;width: calc(72200px - 12000%);\">\n" +
      "              <div style=\"Margin-left: 20px;Margin-right: 20px;Margin-top: 10px;Margin-bottom: 10px;\">\n" +
      "                <div class=\"footer__share-button\">\n" +
      "                  <div style=\"Margin-bottom: 6px;mso-line-height-rule: exactly;\">\n" +
      "                    <fblike style=\"border-radius: 2px;color: #ffffff;display: inline-block;font-size: 11px;font-weight: bold;line-height: 19px;text-align: left;text-decoration: none;border-style: solid;border-width: 4px 7px 3px 4px;mso-border-width-alt: 4px 8px 8px 8px;background-color: gray;border-color: gray;mso-border-color-alt: gray;\">\n" +
      "                      &nbsp;<img style=\"border: 0;display: inline-block;margin-right: 2px;vertical-align: -3px;\" src=\"https://i10.createsend1.com/static/eb/master/13-the-blueprint-3/images/fblike-icon@2x.png\" width=\"16\" height=\"16\" border=\"0\" alt=\"\" />\n" +
      "                      <span style=\"font-size: 11px;mso-text-raise: 3px;\">Share&nbsp;</span>\n" +
      "                    </fblike>\n" +
      "                  </div>\n" +
      "                  <div style=\"Margin-bottom: 6px;mso-line-height-rule: exactly;\">\n" +
      "                    <tweet style=\"border-radius: 2px;color: #ffffff;display: inline-block;font-size: 11px;font-weight: bold;line-height: 19px;text-align: left;text-decoration: none;border-style: solid;border-width: 4px 7px 3px 4px;mso-border-width-alt: 4px 8px 8px 8px;background-color: gray;border-color: gray;mso-border-color-alt: gray;\">\n" +
      "                      &nbsp;<img style=\"border: 0;display: inline-block;margin-right: 2px;vertical-align: -3px;\" src=\"https://i9.createsend1.com/static/eb/master/13-the-blueprint-3/images/tweet-icon@2x.png\" width=\"16\" height=\"16\" border=\"0\" alt=\"\" />\n" +
      "                      <span style=\"font-size: 11px;mso-text-raise: 3px;\">Tweet&nbsp;</span>\n" +
      "                    </tweet>\n" +
      "                  </div>\n" +
      "\n" +
      "                  <div style=\"Margin-bottom: 6px;mso-line-height-rule: exactly;\">\n" +
      "                    <forwardtoafriend style=\"border-radius: 2px;color: #ffffff;display: inline-block;font-size: 11px;font-weight: bold;line-height: 19px;text-align: left;text-decoration: none;border-style: solid;border-width: 4px 7px 3px 4px;mso-border-width-alt: 4px 8px 8px 8px;background-color: gray;border-color: gray;mso-border-color-alt: gray;\" lang=\"en\">\n" +
      "                      &nbsp;<img style=\"border: 0;display: inline-block;margin-right: 2px;vertical-align: -3px;\" src=\"https://i2.createsend1.com/static/eb/master/13-the-blueprint-3/images/forward-icon@2x.png\" width=\"16\" height=\"16\" border=\"0\" alt=\"\" />\n" +
      "                      <span style=\"font-size: 11px;mso-text-raise: 3px;\">Forward&nbsp;</span>\n" +
      "                    </forwardtoafriend>\n" +
      "                  </div>\n" +
      "                </div>\n" +
      "              </div>\n" +
      "            </div>\n" +
      "          <!--[if (mso)|(IE)]></td></tr></table><![endif]-->\n" +
      "          </div>\n" +
      "        </div>\n" +
      "        <div class=\"layout one-col email-footer\" style=\"Margin: 0 auto;max-width: 600px;min-width: 320px; width: 320px;width: calc(28000% - 167400px);overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;\">\n" +
      "          <div class=\"layout__inner\" style=\"border-collapse: collapse;display: table;width: 100%;\">\n" +
      "          <!--[if (mso)|(IE)]><table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\"><tr class=\"layout-email-footer\"><td style=\"width: 600px;\" class=\"w560\"><![endif]-->\n" +
      "            <div class=\"column\" style=\"text-align: left;font-size: 12px;line-height: 19px;color: #363f48;font-family: Karla,Calibri,Geneva,sans-serif;\">\n" +
      "              <div style=\"Margin-left: 20px;Margin-right: 20px;Margin-top: 10px;Margin-bottom: 10px;\">\n" +
      "                <div style=\"font-size: 12px;line-height: 19px;\">\n" +
      "                  <unsubscribe style=\"text-decoration: underline;\">Unsubscribe</unsubscribe>\n" +
      "                </div>\n" +
      "              </div>\n" +
      "            </div>\n" +
      "          <!--[if (mso)|(IE)]></td></tr></table><![endif]-->\n" +
      "          </div>\n" +
      "        </div>\n" +
      "      </div>\n" +
      "      <div style=\"line-height:40px;font-size:40px;\">&nbsp;</div>\n" +
      "    </div></td></tr></tbody></table>\n" +
      "\n" +
      "</body></html>\n";
    return message
  }
};
