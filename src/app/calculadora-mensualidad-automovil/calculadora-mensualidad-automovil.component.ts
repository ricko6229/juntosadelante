import { Component } from '@angular/core';
import { ElementRef, ViewChild, AfterViewInit,OnInit } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-calculadora-mensualidad-de-automovil',
  templateUrl: './calculadora-mensualidad-automovil.component.html',
  styleUrls: ['./calculadora-mensualidad-automovil.component.scss']
})


export class CalculadoraMensualidadDeAutomovilComponent implements OnInit {

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
  }

  updateChartData() {
    if (this.myChart) {
      this.myChart.destroy();
    }
  
    this.myChart = new Chart(this.chartRef.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Principal', 'Interest'],
        datasets: [
          {
            data: [this.loanAmount, this.totalInterest],
            backgroundColor: ['#36a2eb', '#ff6384'],
          },
        ],
      },
      options: {
        plugins: {
          tooltip: {
            callbacks: {
              label: (context: any) => {
                const dataset = context.dataset;
                const index = context.dataIndex;
                const value = dataset.data[index];
                const percentage = parseFloat(((value / (this.loanAmount + this.totalInterest)) * 100).toFixed(1));
                return value + ' (' + percentage + '%)';
              },
              title: (context: any) => {
                return context.label;
              },
            },
          },
        },
      },
    });
  }




  

  loanAmount: number = 10000;
  interestRate: number = 8;
  loanTenure: number = 60;

  interest: number = this.interestRate / 12 / 100;
  loanEMI: number = 0;
  totalAmount: number = 0;
  totalInterest: number = 0;

  @ViewChild('myChart', { static: true }) chartRef!: ElementRef;

  myChart!: Chart<'doughnut', number[], string>;

  constructor() {}

  ngOnInit(): void {
    this.init();
  }


  
  init(): void {
    const n = this.loanTenure;
    const r = (this.interestRate / 100) / 12;  // Convert annual interest rate (percentage) to a monthly interest rate (decimal)
  
    this.loanEMI = parseFloat((this.loanAmount * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1)).toFixed(2));
    this.totalAmount = parseFloat(((this.loanEMI) * n).toFixed(2));
    this.totalInterest = parseFloat((this.totalAmount - this.loanAmount).toFixed(2));
  
    // Update chart data
    this.updateChartData();
  }};

  