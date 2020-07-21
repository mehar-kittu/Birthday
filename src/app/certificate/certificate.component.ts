import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';  
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss']
})
export class CertificateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public captureScreen()  
  { 
  var data = document.getElementById('exportthis');  
    html2canvas(data).then(canvas => {  
  
        var data = canvas.toDataURL();
        var docDefinition = {
            content: [{
                image: data,
                width: 520
            }]
        };
        pdfMake.createPdf(docDefinition).open();
        
    }
);
  }
  public downloadScreen()
  {
    
    var data = document.getElementById('exportthis');  
    html2canvas(data).then(canvas => {  
  
        var data = canvas.toDataURL();
        var docDefinition = {
            content: [{
                image: data,
                width: 520
            }]
        };
        pdfMake.createPdf(docDefinition).download("BEST_FRIEND_CERTIFICATE.pdf");
        
    }
);

  }


}
