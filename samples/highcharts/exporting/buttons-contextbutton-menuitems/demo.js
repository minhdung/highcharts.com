$(function () {
    $('#container').highcharts({
        
        chart: {
        },
        
        credits: {
            enabled: false
        },
        
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        
        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]        
        }],
        
        exporting: {
            buttons: {
                contextButton: {
                    menuItems: [{
                        text: 'Export to PNG (small)',
                        onclick: function() {
                            this.exportChart({
                                width: 250
                            });
                        }
                    }, {
                        text: 'Export to PNG (large)',
                        onclick: function() {
                            this.exportChart();
                        },
                        separator: false
                    }]
                }
            }
        }
        
    });
});