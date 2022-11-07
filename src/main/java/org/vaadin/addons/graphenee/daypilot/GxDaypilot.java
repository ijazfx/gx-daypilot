package org.vaadin.addons.graphenee.daypilot;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.html.Div;

@Tag("gx-daypilot")
@JsModule("./gx-daypilot.ts")
public class GxDaypilot extends Component {

	private static final long serialVersionUID = 1L;

	public GxDaypilot() {
		Div dp = new Div();
		dp.setId("dp");
		getElement().appendChild(dp.getElement());
	}

}
