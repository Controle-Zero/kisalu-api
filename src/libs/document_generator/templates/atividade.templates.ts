export function atividadeTemplateFile() {
  return `<!DOCTYPE html>
  <html lang="pt">
    <head>
      <meta charset="utf-8" />
      <title></title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
      <link
        href="https://netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <script src="https://netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
    </head>
    <body>
      <div class="receipt-content">
        <div class="container bootstrap snippets bootdey">
          <div class="row">
            <div class="col-md-12">
              <div class="invoice-wrapper">
                <div class="intro">
                  <h2 id="fatura">UNION SERVICES</h2>
                  <strong>{{atividade.id}}</strong>
                </div>
  
                <div class="payment-info">
                  <div class="row">
                    <div class="col-sm-6">
                      <span>Referência da transacção</span>
                      {{#atividade.numRef}}
                      <strong>{{atividade.numRef}}</strong>
                      {{/atividade.numRef}}
                      {{^atividade.numRef}}
                      <strong>Não informada</strong>
                      {{/atividade.numRef}}
                    </div>
                    <div class="col-sm-6 text-right">
                      <span>Data</span>
                      <strong>{{data}}</strong>
                    </div>
                  </div>
                </div>
  
                <div class="payment-details">
                  <div class="row">
                    <div class="col-sm-6">
                      <span>Cliente</span>
                      <strong> {{cliente.nome}} </strong>
                      <p>
                        {{moradaCliente.provincia}} <br />
                        {{moradaCliente.distrito}} <br />
                        {{moradaCliente.bairro}} <br />
                        <a href="mailto:{{cliente.email}}"> {{cliente.email}} </a>
                      </p>
                    </div>
                    <div class="col-sm-6 text-right">
                      <span>Provedor</span>
                      <strong> {{provedor.nome}} </strong>
                      <p>
                        {{moradaProvedor.provincia}} <br />
                        {{moradaProvedor.distrito}} <br />
                        {{moradaProvedor.bairro}} <br />
                        <a href="mailto:{{provedor.email}}"> {{provedor.email}} </a>
                      </p>
                    </div>
                  </div>
                </div>
  
                <div class="line-items">
                  <div class="headers clearfix">
                    <div class="row">
                      <div class="col-xs-4">Categoria</div>
                      <div class="col-xs-3">Serviço</div>
                      <div class="col-xs-5 text-right">Montante (AOA)</div>
                    </div>
                  </div>
                  <div class="items">
                    <div class="row item">
                      <div class="col-xs-4 desc">{{categoria.titulo}}</div>
                      <div class="col-xs-3 qty"><del>Sem informação</del></div>
                      <div class="col-xs-5 amount text-right">
                        {{atividade.valorAssociado}}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              <div class="footer">
              <p>Para questões de suporte, entre em contacto connosco via correio eletrônico</p>
              <strong><a href="mailto:ccontrolezero@gmail.com">ccontrolezero@gmail.com</a></strong> </br>
              </br> <p>Copyright © 2022. UServices</p></div>
            </div>
          </div>
        </div>
      </div>
  
      <style type="text/css">
        .receipt-content .logo a:hover {
          text-decoration: none;
          color: #7793c4;
        }
  
        .receipt-content .invoice-wrapper {
          background: #fff;
          border: 1px solid #cdd3e2;
          box-shadow: 0px 0px 1px #ccc;
          padding: 40px 40px 60px;
          margin-top: 40px;
          border-radius: 4px;
        }
  
        .receipt-content .invoice-wrapper .payment-details span {
          color: #a9b0bb;
          display: block;
        }
        .receipt-content .invoice-wrapper .payment-details a {
          display: inline-block;
          margin-top: 5px;
        }
  
        .receipt-content .invoice-wrapper .line-items .print a {
          display: inline-block;
          border: 1px solid #9cb5d6;
          padding: 13px 13px;
          border-radius: 5px;
          color: #708dc0;
          font-size: 13px;
          -webkit-transition: all 0.2s linear;
          -moz-transition: all 0.2s linear;
          -ms-transition: all 0.2s linear;
          -o-transition: all 0.2s linear;
          transition: all 0.2s linear;
        }
  
        .receipt-content .invoice-wrapper .line-items .print a:hover {
          text-decoration: none;
          border-color: #333;
          color: #333;
        }
  
        .receipt-content {
          background: #eceef4;
        }
        @media (min-width: 1200px) {
          .receipt-content .container {
            width: 900px;
          }
        }
  
        .receipt-content .logo {
          text-align: center;
          margin-top: 50px;
        }
  
        .receipt-content .logo a {
          font-family: Myriad Pro, Lato, Helvetica Neue, Arial;
          font-size: 36px;
          letter-spacing: 0.1px;
          color: #555;
          font-weight: 300;
          -webkit-transition: all 0.2s linear;
          -moz-transition: all 0.2s linear;
          -ms-transition: all 0.2s linear;
          -o-transition: all 0.2s linear;
          transition: all 0.2s linear;
        }
  
        .receipt-content .invoice-wrapper .intro {
          line-height: 25px;
          color: #444;
        }
  
        .receipt-content .invoice-wrapper .payment-info {
          margin-top: 25px;
          padding-top: 15px;
        }
  
        .receipt-content .invoice-wrapper .payment-info span {
          color: #a9b0bb;
        }
  
        .receipt-content .invoice-wrapper .payment-info strong {
          display: block;
          color: #444;
          margin-top: 3px;
        }
  
        @media (max-width: 767px) {
          .receipt-content .invoice-wrapper .payment-info .text-right {
            text-align: left;
            margin-top: 20px;
          }
        }
        .receipt-content .invoice-wrapper .payment-details {
          border-top: 2px solid #ebecee;
          margin-top: 30px;
          padding-top: 20px;
          line-height: 22px;
        }
  
        @media (max-width: 767px) {
          .receipt-content .invoice-wrapper .payment-details .text-right {
            text-align: left;
            margin-top: 20px;
          }
        }
        .receipt-content .invoice-wrapper .line-items {
          margin-top: 40px;
        }
        .receipt-content .invoice-wrapper .line-items .headers {
          color: #a9b0bb;
          font-size: 13px;
          letter-spacing: 0.3px;
          border-bottom: 2px solid #ebecee;
          padding-bottom: 4px;
        }
        .receipt-content .invoice-wrapper .line-items .items {
          margin-top: 8px;
          border-bottom: 2px solid #ebecee;
          padding-bottom: 8px;
        }
        .receipt-content .invoice-wrapper .line-items .items .item {
          padding: 10px 0;
          color: #696969;
          font-size: 15px;
        }
        @media (max-width: 767px) {
          .receipt-content .invoice-wrapper .line-items .items .item {
            font-size: 13px;
          }
        }
        .receipt-content .invoice-wrapper .line-items .items .item .amount {
          letter-spacing: 0.1px;
          color: #84868a;
          font-size: 16px;
        }
        @media (max-width: 767px) {
          .receipt-content .invoice-wrapper .line-items .items .item .amount {
            font-size: 13px;
          }
        }
  
        .receipt-content .invoice-wrapper .line-items .total {
          margin-top: 30px;
        }
  
        .receipt-content .invoice-wrapper .line-items .total .extra-notes {
          float: left;
          width: 40%;
          text-align: left;
          font-size: 13px;
          color: #7a7a7a;
          line-height: 20px;
        }
  
        @media (max-width: 767px) {
          .receipt-content .invoice-wrapper .line-items .total .extra-notes {
            width: 100%;
            margin-bottom: 30px;
            float: none;
          }
        }
  
        .receipt-content .invoice-wrapper .line-items .total .extra-notes strong {
          display: block;
          margin-bottom: 5px;
          color: #454545;
        }
  
        .receipt-content .invoice-wrapper .line-items .total .field {
          margin-bottom: 7px;
          font-size: 14px;
          color: #555;
        }
  
        .receipt-content .invoice-wrapper .line-items .total .field.grand-total {
          margin-top: 10px;
          font-size: 16px;
          font-weight: 500;
        }
  
        .receipt-content
          .invoice-wrapper
          .line-items
          .total
          .field.grand-total
          span {
          color: #20a720;
          font-size: 16px;
        }
  
        .receipt-content .invoice-wrapper .line-items .total .field span {
          display: inline-block;
          margin-left: 20px;
          min-width: 85px;
          color: #84868a;
          font-size: 15px;
        }
  
        .receipt-content .invoice-wrapper .line-items .print {
          margin-top: 50px;
          text-align: center;
        }
  
        .receipt-content .invoice-wrapper .line-items .print a i {
          margin-right: 3px;
          font-size: 14px;
        }
  
        .receipt-content .footer {
          margin-top: 40px;
          margin-bottom: 110px;
          text-align: center;
          font-size: 12px;
          color: #969cad;
        }

        #company-name {
          position: relative;
          float: right;
          color : #383D3B
        }

        .intro {
          display: block;
        }

        #fatura {
          margin-top: -5px;
          color: #60DBDA;
        }

      </style>
  
      <script type="text/javascript"></script>
    </body>
  </html>`;
}
