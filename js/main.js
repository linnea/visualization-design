var positive = "rgb(115, 55, 182)";
var negative = "rgb(223, 74, 187)";

$(function() {
    /////// VIS 1
    
  // Use d3.csv to read in your `data/Mass-Shooting-Data.csv` dataset: remember, you must be running a local server
  d3.csv('data/antibiotics_data.csv', function(error, data){
  
    // This function should help you format your data: lifted from the Plotly bubble map example:
    function unpack(rows, key) {
      return rows.map(function(row) { return row[key]; });
    }
    
    var vis1 = [];
    data.forEach(function(row){
        var item = {
        x: ["Penicilin", "Streptomycin", "Neomycin"],
        y: [parseInt(row.Penicilin), parseInt(row.Neomycin), parseInt(row.Streptomycin)],
        type: 'scatter',
        name: row.Bacteria,
        marker: {
            color: window[row.Gram_Staining]
        }
        };
        vis1.push(item);
    
    });
    
    var layout = {
        title: 'Minimum Inhibitory Concentration of Antibiotics on Bacterial Strains',
        xaxis: {
            title: 'Antibiotic',
            titlefont: {
            family: 'Courier New, monospace',
            size: 18,
            color: '#7f7f7f'
            }
        },
        yaxis: {
            title: 'MIC',
            titlefont: {
            family: 'Courier New, monospace',
            size: 18,
            color: '#7f7f7f'
            }
        }
    };
   
    // Call your Plotly function
    Plotly.plot('vis-1', vis1, layout);
  });
  
  /////////////////////
  /////// VIS 2 /////// 
  /////////////////////
  
  d3.csv('data/antibiotics_data.csv', function(error, data2){
       
        // This function should help you format your data: lifted from the Plotly bubble map example:
        function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
        }
        
        var vis2 = [{
            x: unpack(data2, "Bacteria"),
            y: unpack(data2, "Penicilin"),
            name: 'Penicilin',
            type: 'bar'
        },
        {
            x: unpack(data2, "Bacteria"),
            y: unpack(data2, "Neomycin"),
            name: 'Neomycin',
            type: 'bar'
        }, 
        {
            x: unpack(data2, "Bacteria"),
            y: unpack(data2, "Streptomycin"),
            name: 'Streptomycin', 
            type: 'bar'
        },{
            x: unpack(data2, 
            "Bacteria"),
            y: [217.8780625, 217.8780625, 217.8780625, 217.8780625, 217.8780625, 217.8780625, 217.8780625, 217.8780625, 217.8780625, 217.8780625, 217.8780625, 217.8780625, 217.8780625, 217.8780625, 217.8780625, 217.8780625],
            mode: "lines",
            type: 'scatter',
            name: "Penicilin Average MIC",
            marker: {
                color: "#1F77B4",
                width: 1
            }
        }
        ,{
            x: unpack(data2, 
            "Bacteria"),
            y: [3.065, 3.065, 3.065, 3.065, 3.065, 3.065, 3.065, 3.065, 3.065, 3.065, 3.065, 3.065, 3.065, 3.065, 3.065, 3.065],
            mode: "lines",
            type: 'scatter',
            name: "Neomycin Average MIC",
            marker: {
                color: "#FF7F0E",
                width: 1
            }
        },{
            x: unpack(data2, 
            "Bacteria"),
            y: [4.0891875, 4.0891875, 4.0891875, 4.0891875, 4.0891875, 4.0891875, 4.0891875, 4.0891875, 4.0891875, 4.0891875, 4.0891875, 4.0891875, 4.0891875, 4.0891875, 4.0891875],
            mode: "lines",
            type: 'scatter',
            name: "Streptomycin Average MIC",
            marker: {
                color: "#2ca02c",
                width: 1
            }
        }
        ];
        
        var layout2 = {
        title: 'Antibiotic Potency',
        xaxis: {
            title: 'Bacteria',
            titlefont: {
            family: 'Courier New, monospace',
            size: 18,
            color: '#7f7f7f'
            }
        },
        yaxis: {
            title: 'MIC',
            titlefont: {
            family: 'Courier New, monospace',
            size: 18,
            color: '#7f7f7f'
            }
        }, margin: {
            l: 150,
            r: 150,
            b: 150,
            t: 150,
            pad: 4
        }
    };
        
        Plotly.plot('vis-2', vis2, layout2);
    });
    
    /////////////////////
    /////// VIS 3 /////// 
    /////////////////////
    
    d3.csv('data/antibiotics_data1.csv', function(error, data3){
  
    // This function should help you format your data: lifted from the Plotly bubble map example:
    function unpack(rows, key) {
      return rows.map(function(row) { return row[key]; });
    }
    
    function unpackInt(rows, key) {
      return rows.map(function(row) { 
          return parseInt(row[key]); });
    }
    
    var vis3 = [{
        z: [unpackInt(data3, "Penicilin"), unpackInt(data3, "Neomycin"), unpackInt(data3, "Streptomycin")],
        x: unpack(data3, "Bacteria"),
        y: ["Penicilin", "Neomycin", "Streptomycin"],
        type: 'heatmap'
    }];
    
    var layout3 = {
        annotations: [],
        title: 'Bacterial and Antibiotic Resiliency',
        xaxis: {
            title: 'Bacterial Strain',
            titlefont: {
            family: 'Courier New, monospace',
            size: 18,
            color: '#7f7f7f'
            }
        },
        yaxis: {
            title: 'Antibiotic',
            titlefont: {
            family: 'Courier New, monospace',
            size: 18,
            color: '#7f7f7f'
            }
        },
        margin: {
    l: 180,
    r: 150,
    b: 180,
    t: 150,
    pad: 4
  },
    }
    /* Taken from Plotly heatmap annotation add example */
    yValues = ["Penicilin", "Neomycin", "Streptomycin"];
    xValues = unpack(data3, "Bacteria");
    zValues = [unpackInt(data3, "Penicilin"), unpackInt(data3, "Neomycin"), unpackInt(data3, "Streptomycin")];
    for ( var i = 0; i < yValues.length; i++ ) {
        for ( var j = 0; j < xValues.length; j++ ) {
        var currentValue = zValues[i][j];
        if (currentValue != 0.0) {
            var textColor = 'white';
            }else{
            var textColor = 'black';
            }
            var result = {
            xref: 'x1',
            yref: 'y1',
            x: xValues[j],
            y: yValues[i],
            text: zValues[i][j],
            showarrow: false,
            font: {
                color: textColor
            }
            };
            layout3.annotations.push(result);
        }
    }
    Plotly.plot('vis-3', vis3, layout3);
  });
  
})