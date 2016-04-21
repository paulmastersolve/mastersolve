/*
     YUI 3.15.0 (build 834026e)
     Copyright 2014 Yahoo! Inc. All rights reserved.
     Licensed under the BSD License.
     http://yuilibrary.com/license/
     */
YUI.add('series-combospline-stacked',function(Y,NAME){Y.StackedComboSplineSeries=Y.Base.create("stackedComboSplineSeries",Y.StackedComboSeries,[Y.CurveUtil],{drawSeries:function()
{if(this.get("showAreaFill"))
{this.drawStackedAreaSpline();}
if(this.get("showLines"))
{this.drawSpline();}
if(this.get("showMarkers"))
{this.drawPlots();}}},{ATTRS:{type:{value:"stackedComboSpline"},showAreaFill:{value:true}}});},'3.15.0',{"requires":["series-combo-stacked","series-curve-util"]});