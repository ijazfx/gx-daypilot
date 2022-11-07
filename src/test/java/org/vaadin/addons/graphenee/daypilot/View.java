package org.vaadin.addons.graphenee.daypilot;

import org.vaadin.addons.graphenee.daypilot.GxDaypilot;

import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.router.Route;

@Route("")
public class View extends Div {

    public View() {
        GxDaypilot paperSlider = new GxDaypilot();
        add(paperSlider);
    }
}
