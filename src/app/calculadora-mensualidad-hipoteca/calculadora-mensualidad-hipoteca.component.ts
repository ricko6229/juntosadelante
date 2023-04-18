import { Component } from '@angular/core';
import { ElementRef, ViewChild, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-calculadora-mensualidad-hipoteca',
  templateUrl: './calculadora-mensualidad-hipoteca.component.html',
  styleUrls: ['./calculadora-mensualidad-hipoteca.component.scss']
})
export class CalculadoraMensualidadHipotecaComponent implements OnInit {

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

  loanAmount: number = 100000;
  interestRate: number = 8;
  loanTenure: number = 30;

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
    const n = this.loanTenure * 12;
    const r = this.interestRate / 100 / 12;

    this.loanEMI = parseFloat((this.loanAmount * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1)).toFixed(2));
    this.totalAmount = parseFloat((this.loanEMI * n).toFixed(2));
    this.totalInterest = parseFloat((this.totalAmount - this.loanAmount).toFixed(2));

    // Update chart data
    this.updateChartData();
  }
}
