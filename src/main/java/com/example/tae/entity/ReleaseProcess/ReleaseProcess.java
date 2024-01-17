package com.example.tae.entity.ReleaseProcess;

import com.example.tae.entity.TimeStamp;
import jakarta.persistence.*;
import lombok.*;


@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@ToString
public class ReleaseProcess extends TimeStamp {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private int id;

    @Column
    private int releaseCNT;

    @ManyToOne
    private ProcurementPlan procurementPlan;

}
