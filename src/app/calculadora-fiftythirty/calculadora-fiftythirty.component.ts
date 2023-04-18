import { Component } from '@angular/core';
import { ElementRef, ViewChild, AfterViewInit,OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-calculadora-fiftythirty',
  templateUrl: './calculadora-fiftythirty.component.html',
  styleUrls: ['./calculadora-fiftythirty.component.scss']
})

export class CalculadoraFiftythirtyComponent implements OnInit {

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




  

  loanAmount: number = 400;

  necesidades: number = 0;
  totalAmount: number = 0;
  totalInterest: number = 0;

  @ViewChild('myChart', { static: true }) chartRef!: ElementRef;

  myChart!: Chart<'doughnut', number[], string>;

  constructor() {}

  ngOnInit(): void {
    this.init();
  }


  
  init(): void {

  
    this.necesidades = parseFloat((this.loanAmount * 52 /12*.5).toFixed(2));
    this.totalAmount = parseFloat(((this.loanAmount * 52 /12*.2).toFixed(2)));
    this.totalInterest = parseFloat((this.loanAmount * 52 /12*.3).toFixed(2));
  
    // Update chart data
    this.updateChartData();
  }};

  