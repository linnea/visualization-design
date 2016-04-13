var positive = "rgb(115, 55, 182)";
var negative = "rgb(223, 74, 187)";

$(function() {
  // Use d3.csv to read in your `data/Mass-Shooting-Data.csv` dataset: remember, you must be running a local server
  d3.csv('data/antibiotics_data.csv', function(error, data){
    console.log(data);

    // This function should help you format your data: lifted from the Plotly bubble map example:
    function unpack(rows, key) {
      return rows.map(function(row) { return row[key]; });
    }

    // Format your `data` object to pass to the plotly function. Make sure to set:
      // latitude (`lat`),
      // longitude(`lon`),
      // Marker attributes: size, color, opacity.
      // Tooltip information (which requires `text` and `hoverinfo`)
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
    
    // Call your Plotly function
    Plotly.plot('vis-1', vis1);
  });
  
  d3.csv('data/antibiotics_data1.csv', function(error, data2){
        console.log(data2);

        // This function should help you format your data: lifted from the Plotly bubble map example:
        function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
        }
        var vis2 = [];
        data2.forEach(function(row) {
            var item = {
            x: ["Penicilin", "Streptomycin", "Neomycin"],
            y: [parseInt(row.Penicilin), parseInt(row.Neomycin), parseInt(row.Streptomycin)],
            type: 'scatter',
            name: row.Bacteria,
            marker: {
                color: window[row.Gram_Staining]
            }
            };
            vis2.push(item);
        });
        Plotly.plot('vis-2', vis2);
    });
})
/*
var trace1 = {
  x: ["Penicilin", "Streptomycin", "Neomycin"],
  y: [870, 1, 1.6], 
  type: 'scatter',
  name: "Aerobacter aerogenes",
  marker: {
    color: neg
  }
};


var trace2 = {
  x: ["Penicilin", "Streptomycin", "Neomycin"],
  y: [1, 2, 0.02],  
  type: 'scatter',
  name: "Brucella abortus",
  marker: {
    color: neg
  }
};

var trace3 = {
  x: ["Penicilin", "Streptomycin", "Neomycin"],
  y: [.001, .01, 0.007],  
  type: 'scatter',
  name: "Brucella anthracis",
  marker: {
    color: pos
  }
};

var trace4 = {
  x: ["Penicilin", "Streptomycin", "Neomycin"],
  y: [.005, 11, 10],  
  type: 'scatter',
  name: "Diplococcus pneumoniae",
  marker: {
    color: pos
  }
};

var trace5 = {
  x: ["Penicilin", "Streptomycin", "Neomycin"],
  y: [100, .4, .1],  
  type: 'scatter',
  name: "Escherichia coli",
  marker: {
    color: neg
  }
};

var trace6 = {
  x: ["Penicilin", "Streptomycin", "Neomycin"],
  y: [850, 1.2, 1],  
  type: 'scatter',
  name: "Klebsiella pneumoniae",
  marker: {
    color: neg
  }
};

var trace7 = {
  x: ["Penicilin", "Streptomycin", "Neomycin"],
  y: [800, 5, 2],  
  type: 'scatter',
  name: "Mycobacterium tuberculosis",
  marker: {
    color: neg
  }
};

var trace8 = {
  x: ["Penicilin", "Streptomycin", "Neomycin"],
  y: [3,0.1,0.1],  
  type: 'scatter',
  name: "Proteus vulgaris",
  marker: {
    color: neg
  }
};

var trace9 = {
  x: ["Penicilin", "Streptomycin", "Neomycin"],
  y: [850, 2, 0.4],  
  type: 'scatter',
  name: "Pseudomonas aeruginosa",
  marker: {
    color: neg
  }
};

var trace10 = {
  x: ["Penicilin", "Streptomycin", "Neomycin"],
  y: [1, 0.4, .008],  
  type: 'scatter',
  name: "Salmonella (Eberthella) typhosa",
  marker: {
    color: neg
  }
};

var trace11 = {
  x: ["Penicilin", "Streptomycin", "Neomycin"],
  y: [10, 0.8, .09],  
  type: 'scatter',
  name: "Salmonella schottmuelleri",
  marker: {
    color: neg
  }
};

var trace12 = {
  x: ["Penicilin", "Streptomycin", "Neomycin"],
  y: [10, 0.8, .09],  
  type: 'scatter',
  name: "Salmonella schottmuelleri",
  marker: {
    color: neg
  }
};




var data = [trace1, trace2];

$(function() {
    Plotly.newPlot('vis-1', data);
});
*/